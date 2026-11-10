#!/bin/bash

# UPSTREAM(electron-builder@26.16.1): FpmTarget runs this file through its macro
#   templater before packaging, so every dollar-brace sequence is a macro and an
#   unknown name throws at build time. Bash variables here use the $NAME form.

if type update-alternatives >/dev/null 2>&1; then
    if [ -L '/usr/bin/openknowledge' -a -e '/usr/bin/openknowledge' -a "`readlink '/usr/bin/openknowledge'`" != '/etc/alternatives/openknowledge' ]; then
        rm -f '/usr/bin/openknowledge'
    fi
    update-alternatives --install '/usr/bin/openknowledge' 'openknowledge' '/opt/OpenKnowledge/openknowledge' 100 || ln -sf '/opt/OpenKnowledge/openknowledge' '/usr/bin/openknowledge'
else
    ln -sf '/opt/OpenKnowledge/openknowledge' '/usr/bin/openknowledge'
fi

if ! { [[ -L /proc/self/ns/user ]] && unshare --user true; }; then
    chmod 4755 '/opt/OpenKnowledge/chrome-sandbox' || true
else
    chmod 0755 '/opt/OpenKnowledge/chrome-sandbox' || true
fi

if hash update-mime-database 2>/dev/null; then
    update-mime-database /usr/share/mime || true
fi

if hash update-desktop-database 2>/dev/null; then
    update-desktop-database /usr/share/applications || true
fi

rm -f '/etc/apparmor.d/openknowledge'

if apparmor_status --enabled > /dev/null 2>&1; then
  APPARMOR_PROFILE_SOURCE='/opt/OpenKnowledge/resources/apparmor-profile'
  APPARMOR_PROFILE_TARGET='/etc/apparmor.d/openknowledge-userns'
  if apparmor_parser --skip-kernel-load --debug "$APPARMOR_PROFILE_SOURCE" > /dev/null 2>&1; then
    cp -f "$APPARMOR_PROFILE_SOURCE" "$APPARMOR_PROFILE_TARGET"
    if ! { [ -x '/usr/bin/ischroot' ] && /usr/bin/ischroot; } && hash apparmor_parser 2>/dev/null; then
      apparmor_parser --replace --write-cache --skip-read-cache "$APPARMOR_PROFILE_TARGET"
    fi
  else
    echo "Skipping the installation of the AppArmor profile as this version of AppArmor does not seem to support the bundled profile"
  fi
fi

OK_WRAPPER='/opt/OpenKnowledge/resources/cli/bin/ok.sh'
if [ -f "$OK_WRAPPER" ]; then
    chmod 0755 "$OK_WRAPPER" || true
    ln -sf "$OK_WRAPPER" /usr/bin/ok
    ln -sf "$OK_WRAPPER" /usr/bin/open-knowledge
fi
