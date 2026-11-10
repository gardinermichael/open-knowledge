# Inkeep-Agents_Docs - Talk-To-Your-Agents

**Pages:** 13

---

## Embedded Chat for Next.js - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/nextjs/embedded-chat

**Contents:**
- Embedded Chat for Next.js
- Installation
- Quick Start
- Props
  - InkeepBaseSettings
    - ColorModeConfig
    - UserProperties
  - InkeepAIChatSettings
    - AIChatFunctions
    - AIChatDisclaimerSettings

Integrate Inkeep's embedded chat component in Next.js with App Router and dynamic import.

For Next.js apps that use App Router, use the "use client" directive at the top of the file to load the widget client-side.

The InkeepEmbeddedChat component provides a fully embedded chat interface. In Next.js, load it with next/dynamic and ssr: false. It fits dedicated support pages, dashboards, or help centers.

Whether to show the chat.

Whether to autofocus the chat input on load.

"no-shadow" | "container-with-shadow" | undefined

React.ComponentType<InkeepEmbeddedChatProps> | undefined

Configuration for the base settings.

InkeepBaseSettings | undefined

Configuration for the chat.

(InkeepAIChatSettings & { shouldAutoFocusInput?: boolean; }) | undefined

The display name of your organization that will be shown in various UI elements. For example, this may appear in chat messages or headers.

The primary brand color used throughout the widget UI. This color will be used to generate a cohesive color scheme. Should be provided as a valid CSS color value (hex, rgb, etc).

Settings to control the color mode (light/dark) behavior. Can be used to sync with your application's theme or set a forced color mode.

ColorModeConfig | undefined

Theme customization settings for the widget. Allows customizing colors, typography, component styles, and more.

UserTheme | undefined

Custom icon overrides for the default icon set. Allows replacing any of the built-in icons with your own components.

CustomIconMap | undefined

Properties to identify and provide context about the current user. Used for personalization and analytics tracking.

UserProperties | undefined

Authentication token for the current user. Used for authenticated API requests if required.

Async callback that returns a JWT for authenticated chat sessions. When provided, the widget uses JWT-based auth instead of anonymous sessions. The callback is re-invoked automatically on 401 responses to refresh the token.

(() => Promise<string>) | undefined

Additional properties to be sent with analytics events. These properties will be merged with the event properties.

Record<string, unknown> | undefined

Handler for analytics events from the widget.

((event: InkeepCallbackEvent) => Promise<void>) | undefined

The analytics event object

Promise that resolves when the event is logged

Handler for feedback events from the widget.

((feedback: InkeepFeedback & { properties?: Record<string, unknown>; }) => Promise<InkeepFeedback>) | undefined

Whether to bypass the captcha challenge. Only enable this flag if using a server side API type api key, otherwise the api requests will fail without the challenge solution.

Privacy and cookie preferences configuration.

PrivacyPreferences | undefined

Function to transform source data before display.

TransformSource | undefined

The original source data

The type of source data

The options for the transform source

The transformed source data

Reference to the shadow DOM host element if using custom Shadow DOM. Required when embedding the widget within a Shadow DOM.

HTMLElement | null | undefined

Reference to the root element where the widget is mounted. Used for positioning and event handling.

HTMLElement | null | undefined

Custom tags for widget identification. Used in analytics to segment and filter widget instances. Array of string identifiers.

Instance of the Prism syntax highlighting library. Required for code block syntax highlighting functionality.

Query parameters to automatically append to URLs in the widget. Useful for tracking or maintaining context in navigation. Object mapping parameter names to values.

UrlQueryParam | undefined

Base-level filters to apply to all search and chat operations. These are typically organization or user-level filters.

SearchAndChatFilters | undefined

Configuration for syncing the widget's color mode with an external element.

This allows the widget to automatically match its color mode (light/dark) with your application's theme. The widget will observe changes to specified attributes on a target element and update its appearance accordingly.

SyncColorMode | undefined

List of all available colorMode names

Forced colorMode name for the current page

Whether to switch between dark and light colorModes based on prefers-color-scheme

Disable all CSS transitions when switching colorModes

Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons

Key used to store colorMode setting in localStorage

Default colorMode name (for v0.0.12 and lower the default was light). If enableSystem is false, the default colorMode is light

HTML attribute modified based on the active colorMode. Accepts class and data-* (meaning any data attribute, data-mode, data-color, etc.)

"class" | (string & {}) | undefined

Mapping of colorMode name to HTML attribute value. Object where key is the colorMode name and value is the attribute value

ValueObject | undefined

Nonce string to pass to the inline script for CSP headers

Record<string, string> | undefined

App ID for requests, can be generated in the Inkeep dashboard

Base API URL for token exchange, captcha challenge, and the chat run api

https://api.agents.inkeep.com

Base API URL for analytics events (POST /run/v1/events). Defaults to baseUrl when not set.

Context to be passed to the chatstream API.

Record<string, unknown> | undefined

Files to be passed to the chatstream API. Attached to the next outgoing message. Re-queued whenever the array content changes (diffed by filename, mediaType, and size), so new or updated files are sent on the next message. Already-sent files are not re-attached unless the content changes.

FileUIPart[] | undefined

Transform the file attachments displayed on a user message before they render as chips. Called per message at render time with the message's file parts, for live and history-loaded messages alike. The input includes all of the message's file parts regardless of MIME type; the widget's accepted-file-types filter is re-applied to the returned list, so unsupported types still never render. Return the parts to display: omit entries to hide them, or return shallow-modified copies (for example, with a friendlier filename) to rename them. Display-only, so it does not affect what is sent to the agent, stored, or visible to the LLM. Not a security boundary: hidden parts are still sent, stored in conversation history, and present in client memory, and if the transformer throws or returns a non-array, the widget fails open and renders the original untransformed parts. Null entries in a returned array are dropped, treated as intent to omit rather than as a failure. Every returned (whitelisted) part is displayed verbatim, so returning entries that were not in the input adds chips for files the user never attached. Must be pure and cheap, since it runs on every message render. Return new or copied objects and do not mutate the input parts.

((files: FileUIPart[]) => Array<FileUIPart | null | undefined>) | undefined

The placeholder text to display in the chat input field when empty. Use this to provide guidance on what kind of questions users can ask. "Ask me anything about our API documentation..."

A welcome message shown at the start of a new chat session. Supports markdown formatting for rich text styling. Use this to introduce the AI assistant's capabilities and set expectations. "👋 Hi! I'm here to help you with technical questions about our API..."

The name of the product/service/topic that the chat assistant specializes in. This helps contextualize the chat experience for users. If not provided, defaults to the organization name from base settings. "MongoDB Atlas" or "React Router"

The display name for the AI assistant in the chat interface. Choose a name that reflects the assistant's role and your brand. "Atlas Assistant" or "DevBot"

URL to the AI assistant's avatar image. Should be a square image, recommended size 40x40px. Supports common image formats (PNG, JPG, SVG).

You can pass a string or an object to configure for different color modes. { light: 'https://example.com/avatar-light.png', dark: 'https://example.com/avatar-dark.png', }

string | { light: string; dark: string; } | undefined

URL to the user's avatar image in the chat interface. Should be a square image, recommended size 40x40px. Falls back to a default user icon if not provided.

Controls whether links in chat messages open in new browser tabs. Enable this to help users maintain their chat context when following links.

Custom heading text for the example questions section. Use this to better describe your suggested queries. "Common Questions" or "Try asking about..."

A list of pre-written questions users can click to quickly start a conversation. These should reflect common use cases and help users understand the AI assistant's capabilities. ["How do I reset my password?", "What are the API rate limits?"] or [{ value: "How do I reset my password?", label: "How do I reset my password?" }, { value: "What are the API rate limits?", label: "What are the API rate limits?" }]

string[] | { value: string; label: string; }[] | undefined

Whether to visually emphasize the first example question. Use this to draw attention to the most important or common query.

Enables the ability to share chat conversations via URL. Useful for allowing users to share helpful conversations with teammates.

The base URL path used when generating shareable chat links. Should match your application's routing structure. "/shared-chats/" or "/support/conversations/"

Controls the visibility of the copy chat button. Allows users to copy the entire chat transcript to their clipboard.

Unique identifier for loading a specific conversation. Use this to restore a previous conversation state. If the conversation is not found, a new conversation is started.

Pre-fetched conversation messages to render without fetching. Requires conversationId to be set.

Message[] | undefined

When enabled, prevents users from sending new messages. Useful for displaying archived or shared chat sessions.

Whether to make conversations public by default.

"public" | "private" | undefined

Controls the visibility of the chat history button, which opens the list of previous chats.

Configuration for the chat's disclaimer message. Use this to display important notices about AI limitations or data usage.

AIChatDisclaimerSettings | undefined

Callback function triggered whenever the user modifies their input message.

((message: string) => void) | undefined

The current content of the input field

React ref for accessing the chat component's methods. Enables programmatic control of chat functions from parent components.

Ref<AIChatFunctions> | undefined

Array of actions available in the "Get Help" menu. Use this to provide alternative support options like contact forms or documentation links.

GetHelpOption[] | undefined

Array of actions available rendered after each message.

CustomMessageAction[] | undefined

Custom labels for the chat interface's action buttons. Use this for internationalization or to better match your application's terminology.

AIChatToolbarButtonLabels | undefined

Filters to apply to the chat results.

SearchAndChatFilters | undefined

Components to be rendered in the chat interface.

ComponentsConfig<any> | undefined

ComponentsConfig<any> | undefined

Controls whether the chat automatically scrolls to the bottom during streaming. When false, streaming auto-scroll is disabled but the chat still scrolls to bottom when the user sends a new message.

Programmatically sends a message in the chat.

(message?: string) => void

Optional message text. If omitted, sends the current input value.

Programmatically updates the text in the chat input field.

(message: string) => void

The new message text to set

Resets the chat to its initial state. Removes all messages and resets the chat.

Displays a form overlay in the chat interface.

(formSettings: AIChatFormSettings, getHelpOption?: GetHelpOption) => void

Configuration object defining the form's fields and behavior

Optional getHelpOption that triggered the form (for analytics)

Programmatically sets focus to the chat input field. Useful after programmatic updates or when showing the chat interface.

Controls whether the disclaimer message is shown. Enable this when you need to display important notices or legal disclaimers.

The main text content of the disclaimer message. Should clearly communicate important information about AI usage or limitations. "AI responses are generated automatically and may require verification."

Additional information shown when hovering over the disclaimer. Use this to provide more detailed explanations or context.

InkeepCustomIcon | undefined

Action to be performed when the option is clicked.

Icon to be displayed next to the label.

InkeepCustomIcon | undefined

Action to be performed when the option is clicked.

Text shown on the button that clears the chat history. "Clear Chat" or "Start Over"

Text shown on the button that generates a shareable chat link. "Share Chat" or "Get Link"

Text shown on the button that opens the help options menu. "Get Help" or "Support Options"

Text shown on the button that stops the AI from generating a response. "Stop" or "Cancel Response"

Text shown on the button that copies the chat transcript. "Copy Chat" or "Copy Transcript"

{ [key: string]: any; } | undefined

((props: { message: Message; renderComponent: (name: string, props: Record<string, unknown>) => React.ReactNode; renderMarkdown: (text: string) => React.ReactNode; }, target: HTMLElement, context: null) => void | React.ReactNode) | undefined

((props: { tool: ToolUIPart; approve: (approved?: boolean) => Promise<void>; renderMarkdown: (text: string) => React.ReactNode; }, target: HTMLElement, context: null) => void | React.ReactNode) | undefined

Integrate Inkeep's sidebar chat component in Next.js with App Router and dynamic import.

Learn how to use the chat button component in JavaScript

Tell us how this can be better.

**Examples:**

Example 1 (yaml):
```yaml
colorMode: {
  sync: {
    // Watch the document root for theme changes
    target: document.documentElement,
    // Monitor the data-theme attribute
    attributes: ['data-theme'],
    // Determine dark mode based on attribute value
    isDarkMode: (attrs) => attrs['data-theme'] === 'dark',
    // Optional callback when color mode changes
    onChange: (mode) => console.log('Color mode changed to:', mode)
  }
}
```

Example 2 (yaml):
```yaml
action: {
  type: 'open_form',
  formSettings: {
    title: 'Open Form',
    description: 'Open a form',
  },
}
```

Example 3 (yaml):
```yaml
action: {
  type: 'open_link',
  url: 'https://example.com',
}
```

Example 4 (yaml):
```yaml
action: {
  type: 'invoke_callback',
  callback: (args: InvokeCallbackArgs) => {
    console.log(args)
  },
}
```

---

## Chat Button for Next.js - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/nextjs/chat-button

**Contents:**
- Chat Button for Next.js
- Installation
- Quick Start
- Props
  - InkeepBaseSettings
    - ColorModeConfig
    - UserProperties
  - OpenSettingsChatButton
  - InkeepAIChatSettings
    - AIChatFunctions

Use the chat button component in Next.js with App Router and dynamic import.

For Next.js apps that use App Router, use the "use client" directive at the top of the file to load the widget client-side.

The chat button component is a simple way to trigger the Inkeep chat bubble. In Next.js, load it with next/dynamic and ssr: false.

Label for the chat button.

URL to the AI assistant's avatar image. Should be a square image, recommended size 40x40px. Supports common image formats (PNG, JPG, SVG).

You can pass a string or an object to configure for different color modes. { light: 'https://example.com/avatar-light.png', dark: 'https://example.com/avatar-dark.png', }

string | { light: string; dark: string; } | undefined

OpenSettingsChatButton | undefined

Whether to autofocus the chat input on load.

Configuration for the base settings.

InkeepBaseSettings | undefined

Configuration for the chat.

(InkeepAIChatSettings & { shouldAutoFocusInput?: boolean; }) | undefined

The display name of your organization that will be shown in various UI elements. For example, this may appear in chat messages or headers.

The primary brand color used throughout the widget UI. This color will be used to generate a cohesive color scheme. Should be provided as a valid CSS color value (hex, rgb, etc).

Settings to control the color mode (light/dark) behavior. Can be used to sync with your application's theme or set a forced color mode.

ColorModeConfig | undefined

Theme customization settings for the widget. Allows customizing colors, typography, component styles, and more.

UserTheme | undefined

Custom icon overrides for the default icon set. Allows replacing any of the built-in icons with your own components.

CustomIconMap | undefined

Properties to identify and provide context about the current user. Used for personalization and analytics tracking.

UserProperties | undefined

Authentication token for the current user. Used for authenticated API requests if required.

Async callback that returns a JWT for authenticated chat sessions. When provided, the widget uses JWT-based auth instead of anonymous sessions. The callback is re-invoked automatically on 401 responses to refresh the token.

(() => Promise<string>) | undefined

Additional properties to be sent with analytics events. These properties will be merged with the event properties.

Record<string, unknown> | undefined

Handler for analytics events from the widget.

((event: InkeepCallbackEvent) => Promise<void>) | undefined

The analytics event object

Promise that resolves when the event is logged

Handler for feedback events from the widget.

((feedback: InkeepFeedback & { properties?: Record<string, unknown>; }) => Promise<InkeepFeedback>) | undefined

Whether to bypass the captcha challenge. Only enable this flag if using a server side API type api key, otherwise the api requests will fail without the challenge solution.

Privacy and cookie preferences configuration.

PrivacyPreferences | undefined

Function to transform source data before display.

TransformSource | undefined

The original source data

The type of source data

The options for the transform source

The transformed source data

Reference to the shadow DOM host element if using custom Shadow DOM. Required when embedding the widget within a Shadow DOM.

HTMLElement | null | undefined

Reference to the root element where the widget is mounted. Used for positioning and event handling.

HTMLElement | null | undefined

Custom tags for widget identification. Used in analytics to segment and filter widget instances. Array of string identifiers.

Instance of the Prism syntax highlighting library. Required for code block syntax highlighting functionality.

Query parameters to automatically append to URLs in the widget. Useful for tracking or maintaining context in navigation. Object mapping parameter names to values.

UrlQueryParam | undefined

Base-level filters to apply to all search and chat operations. These are typically organization or user-level filters.

SearchAndChatFilters | undefined

Configuration for syncing the widget's color mode with an external element.

This allows the widget to automatically match its color mode (light/dark) with your application's theme. The widget will observe changes to specified attributes on a target element and update its appearance accordingly.

SyncColorMode | undefined

List of all available colorMode names

Forced colorMode name for the current page

Whether to switch between dark and light colorModes based on prefers-color-scheme

Disable all CSS transitions when switching colorModes

Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons

Key used to store colorMode setting in localStorage

Default colorMode name (for v0.0.12 and lower the default was light). If enableSystem is false, the default colorMode is light

HTML attribute modified based on the active colorMode. Accepts class and data-* (meaning any data attribute, data-mode, data-color, etc.)

"class" | (string & {}) | undefined

Mapping of colorMode name to HTML attribute value. Object where key is the colorMode name and value is the attribute value

ValueObject | undefined

Nonce string to pass to the inline script for CSP headers

Controls whether the component is open.

Handler called when the component opens or closes.

((isOpen: boolean) => void) | undefined

Whether the component is open by default.

The key to trigger the component when pressed with Cmd (Mac) / Ctrl (Windows).

Set to null to disable the shortcut.

string | null | undefined

The trigger selector.

The selector to trigger the component when clicked.

Record<string, string> | undefined

App ID for requests, can be generated in the Inkeep dashboard

Base API URL for token exchange, captcha challenge, and the chat run api

https://api.agents.inkeep.com

Base API URL for analytics events (POST /run/v1/events). Defaults to baseUrl when not set.

Context to be passed to the chatstream API.

Record<string, unknown> | undefined

Files to be passed to the chatstream API. Attached to the next outgoing message. Re-queued whenever the array content changes (diffed by filename, mediaType, and size), so new or updated files are sent on the next message. Already-sent files are not re-attached unless the content changes.

FileUIPart[] | undefined

Transform the file attachments displayed on a user message before they render as chips. Called per message at render time with the message's file parts, for live and history-loaded messages alike. The input includes all of the message's file parts regardless of MIME type; the widget's accepted-file-types filter is re-applied to the returned list, so unsupported types still never render. Return the parts to display: omit entries to hide them, or return shallow-modified copies (for example, with a friendlier filename) to rename them. Display-only, so it does not affect what is sent to the agent, stored, or visible to the LLM. Not a security boundary: hidden parts are still sent, stored in conversation history, and present in client memory, and if the transformer throws or returns a non-array, the widget fails open and renders the original untransformed parts. Null entries in a returned array are dropped, treated as intent to omit rather than as a failure. Every returned (whitelisted) part is displayed verbatim, so returning entries that were not in the input adds chips for files the user never attached. Must be pure and cheap, since it runs on every message render. Return new or copied objects and do not mutate the input parts.

((files: FileUIPart[]) => Array<FileUIPart | null | undefined>) | undefined

The placeholder text to display in the chat input field when empty. Use this to provide guidance on what kind of questions users can ask. "Ask me anything about our API documentation..."

A welcome message shown at the start of a new chat session. Supports markdown formatting for rich text styling. Use this to introduce the AI assistant's capabilities and set expectations. "👋 Hi! I'm here to help you with technical questions about our API..."

The name of the product/service/topic that the chat assistant specializes in. This helps contextualize the chat experience for users. If not provided, defaults to the organization name from base settings. "MongoDB Atlas" or "React Router"

The display name for the AI assistant in the chat interface. Choose a name that reflects the assistant's role and your brand. "Atlas Assistant" or "DevBot"

URL to the AI assistant's avatar image. Should be a square image, recommended size 40x40px. Supports common image formats (PNG, JPG, SVG).

You can pass a string or an object to configure for different color modes. { light: 'https://example.com/avatar-light.png', dark: 'https://example.com/avatar-dark.png', }

string | { light: string; dark: string; } | undefined

URL to the user's avatar image in the chat interface. Should be a square image, recommended size 40x40px. Falls back to a default user icon if not provided.

Controls whether links in chat messages open in new browser tabs. Enable this to help users maintain their chat context when following links.

Custom heading text for the example questions section. Use this to better describe your suggested queries. "Common Questions" or "Try asking about..."

A list of pre-written questions users can click to quickly start a conversation. These should reflect common use cases and help users understand the AI assistant's capabilities. ["How do I reset my password?", "What are the API rate limits?"] or [{ value: "How do I reset my password?", label: "How do I reset my password?" }, { value: "What are the API rate limits?", label: "What are the API rate limits?" }]

string[] | { value: string; label: string; }[] | undefined

Whether to visually emphasize the first example question. Use this to draw attention to the most important or common query.

Enables the ability to share chat conversations via URL. Useful for allowing users to share helpful conversations with teammates.

The base URL path used when generating shareable chat links. Should match your application's routing structure. "/shared-chats/" or "/support/conversations/"

Controls the visibility of the copy chat button. Allows users to copy the entire chat transcript to their clipboard.

Unique identifier for loading a specific conversation. Use this to restore a previous conversation state. If the conversation is not found, a new conversation is started.

Pre-fetched conversation messages to render without fetching. Requires conversationId to be set.

Message[] | undefined

When enabled, prevents users from sending new messages. Useful for displaying archived or shared chat sessions.

Whether to make conversations public by default.

"public" | "private" | undefined

Controls the visibility of the chat history button, which opens the list of previous chats.

Configuration for the chat's disclaimer message. Use this to display important notices about AI limitations or data usage.

AIChatDisclaimerSettings | undefined

Callback function triggered whenever the user modifies their input message.

((message: string) => void) | undefined

The current content of the input field

React ref for accessing the chat component's methods. Enables programmatic control of chat functions from parent components.

Ref<AIChatFunctions> | undefined

Array of actions available in the "Get Help" menu. Use this to provide alternative support options like contact forms or documentation links.

GetHelpOption[] | undefined

Array of actions available rendered after each message.

CustomMessageAction[] | undefined

Custom labels for the chat interface's action buttons. Use this for internationalization or to better match your application's terminology.

AIChatToolbarButtonLabels | undefined

Filters to apply to the chat results.

SearchAndChatFilters | undefined

Components to be rendered in the chat interface.

ComponentsConfig<any> | undefined

ComponentsConfig<any> | undefined

Controls whether the chat automatically scrolls to the bottom during streaming. When false, streaming auto-scroll is disabled but the chat still scrolls to bottom when the user sends a new message.

Programmatically sends a message in the chat.

(message?: string) => void

Optional message text. If omitted, sends the current input value.

Programmatically updates the text in the chat input field.

(message: string) => void

The new message text to set

Resets the chat to its initial state. Removes all messages and resets the chat.

Displays a form overlay in the chat interface.

(formSettings: AIChatFormSettings, getHelpOption?: GetHelpOption) => void

Configuration object defining the form's fields and behavior

Optional getHelpOption that triggered the form (for analytics)

Programmatically sets focus to the chat input field. Useful after programmatic updates or when showing the chat interface.

Controls whether the disclaimer message is shown. Enable this when you need to display important notices or legal disclaimers.

The main text content of the disclaimer message. Should clearly communicate important information about AI usage or limitations. "AI responses are generated automatically and may require verification."

Additional information shown when hovering over the disclaimer. Use this to provide more detailed explanations or context.

InkeepCustomIcon | undefined

Action to be performed when the option is clicked.

Icon to be displayed next to the label.

InkeepCustomIcon | undefined

Action to be performed when the option is clicked.

Text shown on the button that clears the chat history. "Clear Chat" or "Start Over"

Text shown on the button that generates a shareable chat link. "Share Chat" or "Get Link"

Text shown on the button that opens the help options menu. "Get Help" or "Support Options"

Text shown on the button that stops the AI from generating a response. "Stop" or "Cancel Response"

Text shown on the button that copies the chat transcript. "Copy Chat" or "Copy Transcript"

{ [key: string]: any; } | undefined

((props: { message: Message; renderComponent: (name: string, props: Record<string, unknown>) => React.ReactNode; renderMarkdown: (text: string) => React.ReactNode; }, target: HTMLElement, context: null) => void | React.ReactNode) | undefined

((props: { tool: ToolUIPart; approve: (approved?: boolean) => Promise<void>; renderMarkdown: (text: string) => React.ReactNode; }, target: HTMLElement, context: null) => void | React.ReactNode) | undefined

Integrate Inkeep's embedded chat component directly into your React application for inline agent conversations.

Create custom UI elements to trigger Inkeep modals in Next.js with App Router and dynamic import.

Tell us how this can be better.

**Examples:**

Example 1 (yaml):
```yaml
colorMode: {
  sync: {
    // Watch the document root for theme changes
    target: document.documentElement,
    // Monitor the data-theme attribute
    attributes: ['data-theme'],
    // Determine dark mode based on attribute value
    isDarkMode: (attrs) => attrs['data-theme'] === 'dark',
    // Optional callback when color mode changes
    onChange: (mode) => console.log('Color mode changed to:', mode)
  }
}
```

Example 2 (yaml):
```yaml
action: {
  type: 'open_form',
  formSettings: {
    title: 'Open Form',
    description: 'Open a form',
  },
}
```

Example 3 (yaml):
```yaml
action: {
  type: 'open_link',
  url: 'https://example.com',
}
```

Example 4 (yaml):
```yaml
action: {
  type: 'invoke_callback',
  callback: (args: InvokeCallbackArgs) => {
    console.log(args)
  },
}
```

---

## Content Security Policy - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/customization/content-security-policy

**Contents:**
- Content Security Policy
- Directives
  - script-src — widget script
  - style-src — inline styles and default font
  - font-src — default font files
  - connect-src — API endpoints
  - worker-src — bot protection
  - Example
- Self-hosting the JS file
  - On this page

Configure CSP for Inkeep's UI components.

If your site enforces a Content Security Policy, add the following directives so the Inkeep widget can load, reach the API, render its default styling, and run its bot-protection check.

The connect-src, style-src, font-src, and worker-src directives are required for all integration methods. script-src https://cdn.jsdelivr.net is only needed when you load the widget via the JS Snippet.

If you load the widget via the JS Snippet:

The widget injects its styles as inline <style> tags, so it requires 'unsafe-inline'. Most sites already allow this — common frameworks (Next.js, Tailwind, styled-components, and similar) need it too — so it is usually already present in your policy.

https://fonts.googleapis.com is only needed for the default Inter font, loaded from Google Fonts. To avoid that external request, set disableLoadingDefaultFont: true in your widget config and self-host Inter from your own origin — then you can drop https://fonts.googleapis.com here and https://fonts.gstatic.com from font-src.

When the default font is enabled, the browser fetches Inter font files from:

Allowlist the host(s) for the components you use:

The widget runs a lightweight proof-of-work bot-protection check on a background Web Worker, which the browser loads from an in-memory blob: URL. CSP requires blob: to be listed explicitly — 'self' alone does not cover it:

You can host the widget script on your own server instead of loading it from jsDelivr.

When self-hosting, you can drop https://cdn.jsdelivr.net from script-src (the script is now same-origin). You still need worker-src 'self' blob: — the bot-protection worker is bundled inside the script and is always loaded from a blob: URL, regardless of where the script is served.

Add your own analytics

Use our callback function to log events from the search and chat widgets to your own analytics tool.

Changelog for the @inkeep/agents-ui-cloud package

Tell us how this can be better.

**Examples:**

Example 1 (swift):
```swift
# script-src is only needed for the JS Snippet (omit for npm / React / Next.js):
script-src  'self' https://cdn.jsdelivr.net;
style-src   'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src    'self' https://fonts.gstatic.com;
connect-src 'self' https://api.agents.inkeep.com https://api.inkeep.com;
worker-src  'self' blob:;
```

Example 2 (jsx):
```jsx
<!-- assumes the file is in the root of your project -->
<script type="module" src="./inkeep-agents-ui-{version}.js" defer></script>
```

---

## Pass context to the widget - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/customization/passing-context

**Contents:**
- Pass context to the widget
- How context reaches your agent
- Automatic context (timestamp & timezone)
- Page & session context (custom headers)
    - Define the headers schema
    - Reference the header in your agent prompt
    - Pass the header value from your chat component
- User context (name, plan, onboarding step)
    - Define the headers schema
    - Reference the headers in your agent prompt

Send page, session, and user context to your agent so it can give personalized, situation-aware responses.

Give your agent context about who the user is so it can respond more specifically, like their name, plan, current page, or where they are in a flow.

Context that the agent (the model) should actually read is passed as HTTP headers via the widget's aiChatSettings.headers prop. You define a headers schema on the agent, and the values become available in two places:

The chat components automatically send the following headers with each request to provide client context:

These headers enable your agents to provide time-aware responses. See Headers to learn how to use these values in your agent configuration.

You can pass custom headers to the chat components via the headers prop in aiChatSettings. Common use cases include passing the current page URL, user context, or session metadata. Custom headers are validated against a schema you define in the agent settings, then made available in your agent prompt via template syntax.

In the following example, you'll pass the current page URL to the agent.

In the Visual Builder, navigate to Agents in the left sidebar, select your agent, then open the Agent Settings pane and scroll down to Headers schema and add the following schema:

Use the key defined in your headers schema with the {{headers.<key>}} template syntax:

Update header values whenever the context changes — on client-side navigation, after login, or when the user advances a step. In React, derive them from state/router so a re-render passes new values; with the JavaScript API, call .update({ aiChatSettings: { headers: { ... } } }) (as shown above).

User attributes work exactly like the page example above — declare each key in your headers schema, reference it in the prompt, and pass it from the widget. The values come from your app's auth or session state rather than the browser. This example passes the user's name and plan; add more keys (like x-onboarding-step) the same way.

In the Agent Settings → Headers schema, add a property for each attribute you want to pass:

Use the keys from your headers schema with the {{headers.<key>}} template syntax:

For richer data, use a context fetcher: pass an identifier like x-user-id as a header, and have the agent fetch the full user record from your API at conversation start. The fetched fields are then available in the prompt as context variables.

Customize the appearance of Inkeep's components.

Add your own analytics

Use our callback function to log events from the search and chat widgets to your own analytics tool.

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
{
  "type": "object",
  "properties": {
    "x-current-url": {
      "type": "string",
      "description": "The URL the user is currently viewing."
    }
  },
  "required": []
}
```

Example 2 (unknown):
```unknown
The user is currently viewing {{headers.x-current-url}}.
```

Example 3 (json):
```json
{
  "type": "object",
  "properties": {
    "x-user-name": {
      "type": "string",
      "description": "The user's display name."
    },
    "x-user-plan": {
      "type": "string",
      "description": "The user's subscription plan, e.g. free or pro."
    }
  },
  "required": []
}
```

Example 4 (unknown):
```unknown
You are helping {{headers.x-user-name}} on the {{headers.x-user-plan}} plan.
```

---

## Interactive Components - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/interactive-components

**Contents:**
- Interactive Components
- How it works
- Setup
- Example: clickable product cards
- Pre-filling the input
- Agent-side setup
  - Create the data components
  - Add the data components to your sub agent
  - Register the components in your chat widget
- Custom tool approval UI

Render clickable components inside AI responses that programmatically send follow-up messages on the user's behalf.

Custom components let your agent render rich, interactive UI inside chat responses. Combined with chatFunctionsRef (React) or the widget instance (JavaScript), those components can programmatically submit follow-up messages when a user clicks them, creating guided, conversational workflows without the user needing to type.

The pattern requires two things in your aiChatSettings:

When the agent emits a QuickActions component with an array of label/message pairs, the user sees clickable buttons. Clicking one sends that message as if the user typed it.

A more realistic example renders product or plan cards that let users drill into details with a single click.

When a user asks "What plans do you offer?", the agent calls its tool to emit PlanCard components. The user sees styled cards and can click any card to ask a targeted follow-up, creating a natural conversational flow.

Instead of sending immediately, you can use updateInputMessage to pre-fill the input and let the user edit before sending. See the full list of available methods in the AIChatFunctions reference below.

For the agent to render these components, create data components in the Visual Builder. Each data component needs a name (matching the key in your components config) and a JSON schema defining its props.

Go to the Data Components tab in the left sidebar, then select New data component.

For the QuickActions component, use the following schema:

For the PlanCard component:

Open your agent's Sub Agent settings and add both data components. The agent will automatically use them when the conversation calls for it.

See Sub Agents for details on adding data components.

Use the same component names as keys in your components config, as shown in the setup section above. The names must match exactly.

For more on data components, see Custom UI Blocks.

When an agent tool requires human approval before executing, the widget shows a default approval card. You can replace this with your own UI by registering an IkpTool component.

IkpTool receives three props:

IkpTool applies globally to all tool calls. To render different UI per tool, branch on tool.type:

Programmatically sends a message in the chat.

(message?: string) => void

Optional message text. If omitted, sends the current input value.

Programmatically updates the text in the chat input field.

(message: string) => void

The new message text to set

Resets the chat to its initial state. Removes all messages and resets the chat.

Displays a form overlay in the chat interface.

(formSettings: AIChatFormSettings, getHelpOption?: GetHelpOption) => void

Configuration object defining the form's fields and behavior

Optional getHelpOption that triggered the form (for analytics)

Programmatically sets focus to the chat input field. Useful after programmatic updates or when showing the chat interface.

Integrate Inkeep's embedded chat component directly into your JavaScript application for inline agent conversations.

How app credentials authenticate end-users, including anonymous sessions, authenticated chat sessions with asymmetric key verification, domain validation, and Proof-of-Work protection.

Tell us how this can be better.

**Examples:**

Example 1 (json):
```json
{
  "type": "object",
  "properties": {
    "actions": {
      "type": "array",
      "description": "List of quick action buttons to display",
      "items": {
        "type": "object",
        "description": "A single quick action button",
        "properties": {
          "label": {
            "type": "string",
            "description": "Button label shown to the user"
          },
          "message": {
            "type": "string",
            "description": "Message to submit when clicked"
          }
        },
        "required": ["label", "message"]
      }
    }
  },
  "required": ["actions"]
}
```

Example 2 (json):
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Plan name, e.g. Starter, Pro, Enterprise"
    },
    "price": {
      "type": "string",
      "description": "Formatted price, e.g. $29/mo"
    },
    "features": {
      "type": "array",
      "description": "List of plan features",
      "items": {
        "type": "string",
        "description": "A single plan feature, e.g. Unlimited projects"
      }
    }
  },
  "required": ["name", "price", "features"]
}
```

Example 3 (jsx):
```jsx
IkpTool: (props) => {
  const { tool, approve } = props
  const toolName = tool.type.replace(/^tool-/, '')

  if (toolName === 'database-query') {
    return <DatabaseQueryApproval tool={tool} approve={approve} />
  }

  if (toolName === 'send-email') {
    return <EmailApproval tool={tool} approve={approve} />
  }

  // Fall back to a generic card for other tools
  return <GenericToolCard tool={tool} approve={approve} />
},
```

---

## Style Components - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/customization/styling

**Contents:**
- Style Components
- Theme Configuration
  - Theme Properties
    - Primary Colors
    - Syntax Highlighter Theme
    - Custom Styles
    - Variables Class Name
- Color Mode Configuration
  - Color Mode Properties
    - Forced Color Mode

Customize the appearance of Inkeep's components.

The style configuration provides comprehensive settings for customizing the appearance of Inkeep widgets. This includes theming, typography, spacing, and component-specific styles.

The theme configuration is defined through the UserTheme interface which extends Partial<IkpTheme>. This allows for deep customization of the widget's appearance.

The primaryColors property allows you to define the color variations used throughout the widget. It accepts the following color options:

All colors should be provided as valid CSS color values (hex, rgb, hsl, etc). Each property is optional, allowing you to customize only the specific color variations you need.

The syntaxHighlighter property lets you configure different themes for code blocks in light and dark modes.

By default, the Prism syntax highlighting theme we use is oneLight in light mode and vsDark in dark mode. To use a different theme, you can provide it in the theme.syntaxHighlighter prop.

You can use published Prism themes or create your own.

The styles property allows injection of custom styles through two methods:

Each style entry requires:

The varsClassName property specifies the class name for the container that holds CSS variables:

This class is added to a wrapper div that provides theming context.

The color mode configuration allows you to control how the widget handles light and dark modes. This is configured through the colorMode property in the base settings:

Use forcedColorMode to explicitly set the color mode for the current page:

Enable enableSystem to automatically switch between dark and light modes based on the user's system preferences:

The sync property allows you to synchronize the widget's color mode with your application's theme:

Common sync configurations:

Inkeep provides a set of CSS variables that you can use to customize the widget's appearance. These variables are prefixed with --ikp- and are available within the scope of the widget.

You can use Inkeep CSS variables within your stylesheets to customize elements. For example:

To apply specific styles for dark mode, use the [data-theme='dark'] attribute selector:

The AI assistant avatar can be customized through the aiChatSettings using the aiAssistantAvatar property:

it's either a string URL or an object to specify light and dark mode avatars:

The user avatar can be customized using the userAvatar property in the aiChatSettings.

You can customize various icons throughout the widget by providing a customIcons dictionary in the baseSettings. Each icon can be either a built-in icon or a custom SVG/image.

If the url for a custom icon is a .svg file it will be rendered as an <svg>, all other file types will be rendered using an <Image> tag.

The default theme includes these core settings:

All component class names are prefixed with ikp-. Here's the complete list of available class names:

How app credentials authenticate end-users, including anonymous sessions, authenticated chat sessions with asymmetric key verification, domain validation, and Proof-of-Work protection.

Send page, session, and user context to your agent so it can give personalized, situation-aware responses.

Tell us how this can be better.

**Examples:**

Example 1 (sass):
```sass
import { type InkeepBaseSettings } from "@inkeep/agents-ui-cloud";

const baseSettings: InkeepBaseSettings = {
  theme: {
    // Basic color customization
    primaryColors: {
      primary: "#26D6FF",
      secondary: "#6366F1",
    },

    // Syntax highlighter themes
    syntaxHighlighter: {
      lightTheme: themes.github,
      darkTheme: themes.dracula,
    },

    // Custom styles injection
    styles: [
      {
        key: "google-fonts",
        type: "link",
        value:
          "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
      },
      {
        key: "custom-theme",
        type: "style",
        value: `
          .ikp-ai-chat-message {
            border-radius: 8px;
            padding: 12px;
          }
          [data-theme='dark'] .ikp-ai-chat-message {
            background: #2D3748;
          }
        `,
      },
    ],

    // CSS variables container class name
    varsClassName: "ikp-variables",

    // Disable loading the default font for the widgets
    disableLoadingDefaultFont: true,
  },
};
```

Example 2 (yaml):
```yaml
primaryColors: {
  textBold?: string         // Bold text color
  textSubtle?: string       // Subtle text color
  lighter?: string          // Lightest shade
  light?: string           // Light shade
  lightSubtle?: string     // Subtle light shade
  medium?: string          // Medium shade
  mediumSubtle?: string    // Subtle medium shade
  strong?: string          // Strong shade
  stronger?: string        // Stronger shade
  textColorOnPrimary?: string     // Text color on primary background
}
```

Example 3 (yaml):
```yaml
syntaxHighlighter: {
  lightTheme: themes.github,  // Theme for light mode
  darkTheme: themes.dracula   // Theme for dark mode
}
```

Example 4 (sass):
```sass
{
  key: 'google-fonts',
  type: 'link',
  value: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
}
```

---

## Chat Button for JavaScript - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/javascript/chat-button

**Contents:**
- Chat Button for JavaScript
- Quick Start
- Config
  - InkeepBaseSettings
    - ColorModeConfig
    - UserProperties
  - OpenSettingsChatButton
  - InkeepAIChatSettings
    - AIChatFunctions
    - AIChatDisclaimerSettings

Learn how to use the chat button component in JavaScript

The chat button component is a simple way to trigger the Inkeep chat bubble in your JavaScript application.

Add the below <script> tag to the <head> or <body> of your website.

Insert the Chat Button by using the Inkeep.ChatButton() function.

Label for the chat button.

URL to the AI assistant's avatar image. Should be a square image, recommended size 40x40px. Supports common image formats (PNG, JPG, SVG).

You can pass a string or an object to configure for different color modes. { light: 'https://example.com/avatar-light.png', dark: 'https://example.com/avatar-dark.png', }

string | { light: string; dark: string; } | undefined

OpenSettingsChatButton | undefined

Whether to autofocus the chat input on load.

Configuration for the base settings.

InkeepBaseSettings | undefined

Configuration for the chat.

(InkeepAIChatSettings & { shouldAutoFocusInput?: boolean; }) | undefined

The display name of your organization that will be shown in various UI elements. For example, this may appear in chat messages or headers.

The primary brand color used throughout the widget UI. This color will be used to generate a cohesive color scheme. Should be provided as a valid CSS color value (hex, rgb, etc).

Settings to control the color mode (light/dark) behavior. Can be used to sync with your application's theme or set a forced color mode.

ColorModeConfig | undefined

Theme customization settings for the widget. Allows customizing colors, typography, component styles, and more.

UserTheme | undefined

Custom icon overrides for the default icon set. Allows replacing any of the built-in icons with your own components.

CustomIconMap | undefined

Properties to identify and provide context about the current user. Used for personalization and analytics tracking.

UserProperties | undefined

Authentication token for the current user. Used for authenticated API requests if required.

Async callback that returns a JWT for authenticated chat sessions. When provided, the widget uses JWT-based auth instead of anonymous sessions. The callback is re-invoked automatically on 401 responses to refresh the token.

(() => Promise<string>) | undefined

Additional properties to be sent with analytics events. These properties will be merged with the event properties.

Record<string, unknown> | undefined

Handler for analytics events from the widget.

((event: InkeepCallbackEvent) => Promise<void>) | undefined

The analytics event object

Promise that resolves when the event is logged

Handler for feedback events from the widget.

((feedback: InkeepFeedback & { properties?: Record<string, unknown>; }) => Promise<InkeepFeedback>) | undefined

Whether to bypass the captcha challenge. Only enable this flag if using a server side API type api key, otherwise the api requests will fail without the challenge solution.

Privacy and cookie preferences configuration.

PrivacyPreferences | undefined

Function to transform source data before display.

TransformSource | undefined

The original source data

The type of source data

The options for the transform source

The transformed source data

Reference to the shadow DOM host element if using custom Shadow DOM. Required when embedding the widget within a Shadow DOM.

HTMLElement | null | undefined

Reference to the root element where the widget is mounted. Used for positioning and event handling.

HTMLElement | null | undefined

Custom tags for widget identification. Used in analytics to segment and filter widget instances. Array of string identifiers.

Instance of the Prism syntax highlighting library. Required for code block syntax highlighting functionality.

Query parameters to automatically append to URLs in the widget. Useful for tracking or maintaining context in navigation. Object mapping parameter names to values.

UrlQueryParam | undefined

Base-level filters to apply to all search and chat operations. These are typically organization or user-level filters.

SearchAndChatFilters | undefined

Configuration for syncing the widget's color mode with an external element.

This allows the widget to automatically match its color mode (light/dark) with your application's theme. The widget will observe changes to specified attributes on a target element and update its appearance accordingly.

SyncColorMode | undefined

List of all available colorMode names

Forced colorMode name for the current page

Whether to switch between dark and light colorModes based on prefers-color-scheme

Disable all CSS transitions when switching colorModes

Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons

Key used to store colorMode setting in localStorage

Default colorMode name (for v0.0.12 and lower the default was light). If enableSystem is false, the default colorMode is light

HTML attribute modified based on the active colorMode. Accepts class and data-* (meaning any data attribute, data-mode, data-color, etc.)

"class" | (string & {}) | undefined

Mapping of colorMode name to HTML attribute value. Object where key is the colorMode name and value is the attribute value

ValueObject | undefined

Nonce string to pass to the inline script for CSP headers

Controls whether the component is open.

Handler called when the component opens or closes.

((isOpen: boolean) => void) | undefined

Whether the component is open by default.

The key to trigger the component when pressed with Cmd (Mac) / Ctrl (Windows).

Set to null to disable the shortcut.

string | null | undefined

The trigger selector.

The selector to trigger the component when clicked.

Record<string, string> | undefined

App ID for requests, can be generated in the Inkeep dashboard

Base API URL for token exchange, captcha challenge, and the chat run api

https://api.agents.inkeep.com

Base API URL for analytics events (POST /run/v1/events). Defaults to baseUrl when not set.

Context to be passed to the chatstream API.

Record<string, unknown> | undefined

Files to be passed to the chatstream API. Attached to the next outgoing message. Re-queued whenever the array content changes (diffed by filename, mediaType, and size), so new or updated files are sent on the next message. Already-sent files are not re-attached unless the content changes.

FileUIPart[] | undefined

Transform the file attachments displayed on a user message before they render as chips. Called per message at render time with the message's file parts, for live and history-loaded messages alike. The input includes all of the message's file parts regardless of MIME type; the widget's accepted-file-types filter is re-applied to the returned list, so unsupported types still never render. Return the parts to display: omit entries to hide them, or return shallow-modified copies (for example, with a friendlier filename) to rename them. Display-only, so it does not affect what is sent to the agent, stored, or visible to the LLM. Not a security boundary: hidden parts are still sent, stored in conversation history, and present in client memory, and if the transformer throws or returns a non-array, the widget fails open and renders the original untransformed parts. Null entries in a returned array are dropped, treated as intent to omit rather than as a failure. Every returned (whitelisted) part is displayed verbatim, so returning entries that were not in the input adds chips for files the user never attached. Must be pure and cheap, since it runs on every message render. Return new or copied objects and do not mutate the input parts.

((files: FileUIPart[]) => Array<FileUIPart | null | undefined>) | undefined

The placeholder text to display in the chat input field when empty. Use this to provide guidance on what kind of questions users can ask. "Ask me anything about our API documentation..."

A welcome message shown at the start of a new chat session. Supports markdown formatting for rich text styling. Use this to introduce the AI assistant's capabilities and set expectations. "👋 Hi! I'm here to help you with technical questions about our API..."

The name of the product/service/topic that the chat assistant specializes in. This helps contextualize the chat experience for users. If not provided, defaults to the organization name from base settings. "MongoDB Atlas" or "React Router"

The display name for the AI assistant in the chat interface. Choose a name that reflects the assistant's role and your brand. "Atlas Assistant" or "DevBot"

URL to the AI assistant's avatar image. Should be a square image, recommended size 40x40px. Supports common image formats (PNG, JPG, SVG).

You can pass a string or an object to configure for different color modes. { light: 'https://example.com/avatar-light.png', dark: 'https://example.com/avatar-dark.png', }

string | { light: string; dark: string; } | undefined

URL to the user's avatar image in the chat interface. Should be a square image, recommended size 40x40px. Falls back to a default user icon if not provided.

Controls whether links in chat messages open in new browser tabs. Enable this to help users maintain their chat context when following links.

Custom heading text for the example questions section. Use this to better describe your suggested queries. "Common Questions" or "Try asking about..."

A list of pre-written questions users can click to quickly start a conversation. These should reflect common use cases and help users understand the AI assistant's capabilities. ["How do I reset my password?", "What are the API rate limits?"] or [{ value: "How do I reset my password?", label: "How do I reset my password?" }, { value: "What are the API rate limits?", label: "What are the API rate limits?" }]

string[] | { value: string; label: string; }[] | undefined

Whether to visually emphasize the first example question. Use this to draw attention to the most important or common query.

Enables the ability to share chat conversations via URL. Useful for allowing users to share helpful conversations with teammates.

The base URL path used when generating shareable chat links. Should match your application's routing structure. "/shared-chats/" or "/support/conversations/"

Controls the visibility of the copy chat button. Allows users to copy the entire chat transcript to their clipboard.

Unique identifier for loading a specific conversation. Use this to restore a previous conversation state. If the conversation is not found, a new conversation is started.

Pre-fetched conversation messages to render without fetching. Requires conversationId to be set.

Message[] | undefined

When enabled, prevents users from sending new messages. Useful for displaying archived or shared chat sessions.

Whether to make conversations public by default.

"public" | "private" | undefined

Controls the visibility of the chat history button, which opens the list of previous chats.

Configuration for the chat's disclaimer message. Use this to display important notices about AI limitations or data usage.

AIChatDisclaimerSettings | undefined

Callback function triggered whenever the user modifies their input message.

((message: string) => void) | undefined

The current content of the input field

React ref for accessing the chat component's methods. Enables programmatic control of chat functions from parent components.

Ref<AIChatFunctions> | undefined

Array of actions available in the "Get Help" menu. Use this to provide alternative support options like contact forms or documentation links.

GetHelpOption[] | undefined

Array of actions available rendered after each message.

CustomMessageAction[] | undefined

Custom labels for the chat interface's action buttons. Use this for internationalization or to better match your application's terminology.

AIChatToolbarButtonLabels | undefined

Filters to apply to the chat results.

SearchAndChatFilters | undefined

Components to be rendered in the chat interface.

ComponentsConfig<any> | undefined

ComponentsConfig<any> | undefined

Controls whether the chat automatically scrolls to the bottom during streaming. When false, streaming auto-scroll is disabled but the chat still scrolls to bottom when the user sends a new message.

Programmatically sends a message in the chat.

(message?: string) => void

Optional message text. If omitted, sends the current input value.

Programmatically updates the text in the chat input field.

(message: string) => void

The new message text to set

Resets the chat to its initial state. Removes all messages and resets the chat.

Displays a form overlay in the chat interface.

(formSettings: AIChatFormSettings, getHelpOption?: GetHelpOption) => void

Configuration object defining the form's fields and behavior

Optional getHelpOption that triggered the form (for analytics)

Programmatically sets focus to the chat input field. Useful after programmatic updates or when showing the chat interface.

Controls whether the disclaimer message is shown. Enable this when you need to display important notices or legal disclaimers.

The main text content of the disclaimer message. Should clearly communicate important information about AI usage or limitations. "AI responses are generated automatically and may require verification."

Additional information shown when hovering over the disclaimer. Use this to provide more detailed explanations or context.

InkeepCustomIcon | undefined

Action to be performed when the option is clicked.

Icon to be displayed next to the label.

InkeepCustomIcon | undefined

Action to be performed when the option is clicked.

Text shown on the button that clears the chat history. "Clear Chat" or "Start Over"

Text shown on the button that generates a shareable chat link. "Share Chat" or "Get Link"

Text shown on the button that opens the help options menu. "Get Help" or "Support Options"

Text shown on the button that stops the AI from generating a response. "Stop" or "Cancel Response"

Text shown on the button that copies the chat transcript. "Copy Chat" or "Copy Transcript"

{ [key: string]: any; } | undefined

((props: { message: Message; renderComponent: (name: string, props: Record<string, unknown>) => React.ReactNode; renderMarkdown: (text: string) => React.ReactNode; }, target: HTMLElement, context: null) => void | React.ReactNode) | undefined

((props: { tool: ToolUIPart; approve: (approved?: boolean) => Promise<void>; renderMarkdown: (text: string) => React.ReactNode; }, target: HTMLElement, context: null) => void | React.ReactNode) | undefined

Integrate Inkeep's embedded chat component in Next.js with App Router and dynamic import.

Create custom UI elements to trigger Inkeep modals with complete control over appearance and behavior in JavaScript.

Tell us how this can be better.

**Examples:**

Example 1 (jsx):
```jsx
<script
    type="module"
    src="https://cdn.jsdelivr.net/npm/@inkeep/agents-ui-js-cloud@0.17/dist/embed.js"
    defer
></script>
```

Example 2 (typescript):
```typescript
const config: InkeepChatButtonProps = {
  aiChatSettings: {
    baseUrl: "https://your-api.example.com",
    appId: process.env.INKEEP_APP_ID, // Your app ID
  },
};

const chatButton = Inkeep.ChatButton(config);
```

Example 3 (yaml):
```yaml
colorMode: {
  sync: {
    // Watch the document root for theme changes
    target: document.documentElement,
    // Monitor the data-theme attribute
    attributes: ['data-theme'],
    // Determine dark mode based on attribute value
    isDarkMode: (attrs) => attrs['data-theme'] === 'dark',
    // Optional callback when color mode changes
    onChange: (mode) => console.log('Color mode changed to:', mode)
  }
}
```

Example 4 (yaml):
```yaml
action: {
  type: 'open_form',
  formSettings: {
    title: 'Open Form',
    description: 'Open a form',
  },
}
```

---

## Add your own analytics - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/customization/analytics

**Contents:**
- Add your own analytics
- Example
  - On this page

Use our callback function to log events from the search and chat widgets to your own analytics tool.

To understand how usage of the Inkeep search or chat affects your business, you may want to log events from the search and chat widgets to your own analytics tool. This could be Mixpanel, Posthog, Amplitude, Segment or other analytics or CDP tools.

We expose the events through a callback function called onEvent that can be configured in the baseSettings configuration.

Below is an example of how to use onEvent to log all events to your analytics tool.

Analytics SDKs automatically attach the active user identity at capture time, so Inkeep events land on the same user timeline as your existing events — no extra wiring needed for funnels, cohorts, or user paths.

Send page, session, and user context to your agent so it can give personalized, situation-aware responses.

Content Security Policy

Configure CSP for Inkeep's UI components.

Tell us how this can be better.

**Examples:**

Example 1 (javascript):
```javascript
import { type InkeepCallbackEvent } from "@inkeep/agents-ui-cloud";

const baseSettings = {
  onEvent: async (event: InkeepCallbackEvent) => {
    // console.log('event', event);
    // log the event to your own analytics tool for example PostHog
    posthog.capture(event.eventName, {
      ...event.properties,
    });
  }
};
```

---

## Embedded Chat - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/react/embedded-chat

**Contents:**
- Embedded Chat
- Installation
- Quick Start
- Props
  - InkeepBaseSettings
    - ColorModeConfig
    - UserProperties
  - InkeepAIChatSettings
    - AIChatFunctions
    - AIChatDisclaimerSettings

Integrate Inkeep's embedded chat component directly into your React application for inline agent conversations.

The InkeepEmbeddedChat component provides a fully embedded chat interface that you can integrate directly into your React application's layout. Unlike modal or sidebar implementations, the embedded chat becomes part of your page structure, perfect for dedicated support pages, dashboards, or help centers.

Whether to show the chat.

Whether to autofocus the chat input on load.

"no-shadow" | "container-with-shadow" | undefined

React.ComponentType<InkeepEmbeddedChatProps> | undefined

Configuration for the base settings.

InkeepBaseSettings | undefined

Configuration for the chat.

(InkeepAIChatSettings & { shouldAutoFocusInput?: boolean; }) | undefined

The display name of your organization that will be shown in various UI elements. For example, this may appear in chat messages or headers.

The primary brand color used throughout the widget UI. This color will be used to generate a cohesive color scheme. Should be provided as a valid CSS color value (hex, rgb, etc).

Settings to control the color mode (light/dark) behavior. Can be used to sync with your application's theme or set a forced color mode.

ColorModeConfig | undefined

Theme customization settings for the widget. Allows customizing colors, typography, component styles, and more.

UserTheme | undefined

Custom icon overrides for the default icon set. Allows replacing any of the built-in icons with your own components.

CustomIconMap | undefined

Properties to identify and provide context about the current user. Used for personalization and analytics tracking.

UserProperties | undefined

Authentication token for the current user. Used for authenticated API requests if required.

Async callback that returns a JWT for authenticated chat sessions. When provided, the widget uses JWT-based auth instead of anonymous sessions. The callback is re-invoked automatically on 401 responses to refresh the token.

(() => Promise<string>) | undefined

Additional properties to be sent with analytics events. These properties will be merged with the event properties.

Record<string, unknown> | undefined

Handler for analytics events from the widget.

((event: InkeepCallbackEvent) => Promise<void>) | undefined

The analytics event object

Promise that resolves when the event is logged

Handler for feedback events from the widget.

((feedback: InkeepFeedback & { properties?: Record<string, unknown>; }) => Promise<InkeepFeedback>) | undefined

Whether to bypass the captcha challenge. Only enable this flag if using a server side API type api key, otherwise the api requests will fail without the challenge solution.

Privacy and cookie preferences configuration.

PrivacyPreferences | undefined

Function to transform source data before display.

TransformSource | undefined

The original source data

The type of source data

The options for the transform source

The transformed source data

Reference to the shadow DOM host element if using custom Shadow DOM. Required when embedding the widget within a Shadow DOM.

HTMLElement | null | undefined

Reference to the root element where the widget is mounted. Used for positioning and event handling.

HTMLElement | null | undefined

Custom tags for widget identification. Used in analytics to segment and filter widget instances. Array of string identifiers.

Instance of the Prism syntax highlighting library. Required for code block syntax highlighting functionality.

Query parameters to automatically append to URLs in the widget. Useful for tracking or maintaining context in navigation. Object mapping parameter names to values.

UrlQueryParam | undefined

Base-level filters to apply to all search and chat operations. These are typically organization or user-level filters.

SearchAndChatFilters | undefined

Configuration for syncing the widget's color mode with an external element.

This allows the widget to automatically match its color mode (light/dark) with your application's theme. The widget will observe changes to specified attributes on a target element and update its appearance accordingly.

SyncColorMode | undefined

List of all available colorMode names

Forced colorMode name for the current page

Whether to switch between dark and light colorModes based on prefers-color-scheme

Disable all CSS transitions when switching colorModes

Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons

Key used to store colorMode setting in localStorage

Default colorMode name (for v0.0.12 and lower the default was light). If enableSystem is false, the default colorMode is light

HTML attribute modified based on the active colorMode. Accepts class and data-* (meaning any data attribute, data-mode, data-color, etc.)

"class" | (string & {}) | undefined

Mapping of colorMode name to HTML attribute value. Object where key is the colorMode name and value is the attribute value

ValueObject | undefined

Nonce string to pass to the inline script for CSP headers

Record<string, string> | undefined

App ID for requests, can be generated in the Inkeep dashboard

Base API URL for token exchange, captcha challenge, and the chat run api

https://api.agents.inkeep.com

Base API URL for analytics events (POST /run/v1/events). Defaults to baseUrl when not set.

Context to be passed to the chatstream API.

Record<string, unknown> | undefined

Files to be passed to the chatstream API. Attached to the next outgoing message. Re-queued whenever the array content changes (diffed by filename, mediaType, and size), so new or updated files are sent on the next message. Already-sent files are not re-attached unless the content changes.

FileUIPart[] | undefined

Transform the file attachments displayed on a user message before they render as chips. Called per message at render time with the message's file parts, for live and history-loaded messages alike. The input includes all of the message's file parts regardless of MIME type; the widget's accepted-file-types filter is re-applied to the returned list, so unsupported types still never render. Return the parts to display: omit entries to hide them, or return shallow-modified copies (for example, with a friendlier filename) to rename them. Display-only, so it does not affect what is sent to the agent, stored, or visible to the LLM. Not a security boundary: hidden parts are still sent, stored in conversation history, and present in client memory, and if the transformer throws or returns a non-array, the widget fails open and renders the original untransformed parts. Null entries in a returned array are dropped, treated as intent to omit rather than as a failure. Every returned (whitelisted) part is displayed verbatim, so returning entries that were not in the input adds chips for files the user never attached. Must be pure and cheap, since it runs on every message render. Return new or copied objects and do not mutate the input parts.

((files: FileUIPart[]) => Array<FileUIPart | null | undefined>) | undefined

The placeholder text to display in the chat input field when empty. Use this to provide guidance on what kind of questions users can ask. "Ask me anything about our API documentation..."

A welcome message shown at the start of a new chat session. Supports markdown formatting for rich text styling. Use this to introduce the AI assistant's capabilities and set expectations. "👋 Hi! I'm here to help you with technical questions about our API..."

The name of the product/service/topic that the chat assistant specializes in. This helps contextualize the chat experience for users. If not provided, defaults to the organization name from base settings. "MongoDB Atlas" or "React Router"

The display name for the AI assistant in the chat interface. Choose a name that reflects the assistant's role and your brand. "Atlas Assistant" or "DevBot"

URL to the AI assistant's avatar image. Should be a square image, recommended size 40x40px. Supports common image formats (PNG, JPG, SVG).

You can pass a string or an object to configure for different color modes. { light: 'https://example.com/avatar-light.png', dark: 'https://example.com/avatar-dark.png', }

string | { light: string; dark: string; } | undefined

URL to the user's avatar image in the chat interface. Should be a square image, recommended size 40x40px. Falls back to a default user icon if not provided.

Controls whether links in chat messages open in new browser tabs. Enable this to help users maintain their chat context when following links.

Custom heading text for the example questions section. Use this to better describe your suggested queries. "Common Questions" or "Try asking about..."

A list of pre-written questions users can click to quickly start a conversation. These should reflect common use cases and help users understand the AI assistant's capabilities. ["How do I reset my password?", "What are the API rate limits?"] or [{ value: "How do I reset my password?", label: "How do I reset my password?" }, { value: "What are the API rate limits?", label: "What are the API rate limits?" }]

string[] | { value: string; label: string; }[] | undefined

Whether to visually emphasize the first example question. Use this to draw attention to the most important or common query.

Enables the ability to share chat conversations via URL. Useful for allowing users to share helpful conversations with teammates.

The base URL path used when generating shareable chat links. Should match your application's routing structure. "/shared-chats/" or "/support/conversations/"

Controls the visibility of the copy chat button. Allows users to copy the entire chat transcript to their clipboard.

Unique identifier for loading a specific conversation. Use this to restore a previous conversation state. If the conversation is not found, a new conversation is started.

Pre-fetched conversation messages to render without fetching. Requires conversationId to be set.

Message[] | undefined

When enabled, prevents users from sending new messages. Useful for displaying archived or shared chat sessions.

Whether to make conversations public by default.

"public" | "private" | undefined

Controls the visibility of the chat history button, which opens the list of previous chats.

Configuration for the chat's disclaimer message. Use this to display important notices about AI limitations or data usage.

AIChatDisclaimerSettings | undefined

Callback function triggered whenever the user modifies their input message.

((message: string) => void) | undefined

The current content of the input field

React ref for accessing the chat component's methods. Enables programmatic control of chat functions from parent components.

Ref<AIChatFunctions> | undefined

Array of actions available in the "Get Help" menu. Use this to provide alternative support options like contact forms or documentation links.

GetHelpOption[] | undefined

Array of actions available rendered after each message.

CustomMessageAction[] | undefined

Custom labels for the chat interface's action buttons. Use this for internationalization or to better match your application's terminology.

AIChatToolbarButtonLabels | undefined

Filters to apply to the chat results.

SearchAndChatFilters | undefined

Components to be rendered in the chat interface.

ComponentsConfig<any> | undefined

ComponentsConfig<any> | undefined

Controls whether the chat automatically scrolls to the bottom during streaming. When false, streaming auto-scroll is disabled but the chat still scrolls to bottom when the user sends a new message.

Programmatically sends a message in the chat.

(message?: string) => void

Optional message text. If omitted, sends the current input value.

Programmatically updates the text in the chat input field.

(message: string) => void

The new message text to set

Resets the chat to its initial state. Removes all messages and resets the chat.

Displays a form overlay in the chat interface.

(formSettings: AIChatFormSettings, getHelpOption?: GetHelpOption) => void

Configuration object defining the form's fields and behavior

Optional getHelpOption that triggered the form (for analytics)

Programmatically sets focus to the chat input field. Useful after programmatic updates or when showing the chat interface.

Controls whether the disclaimer message is shown. Enable this when you need to display important notices or legal disclaimers.

The main text content of the disclaimer message. Should clearly communicate important information about AI usage or limitations. "AI responses are generated automatically and may require verification."

Additional information shown when hovering over the disclaimer. Use this to provide more detailed explanations or context.

InkeepCustomIcon | undefined

Action to be performed when the option is clicked.

Icon to be displayed next to the label.

InkeepCustomIcon | undefined

Action to be performed when the option is clicked.

Text shown on the button that clears the chat history. "Clear Chat" or "Start Over"

Text shown on the button that generates a shareable chat link. "Share Chat" or "Get Link"

Text shown on the button that opens the help options menu. "Get Help" or "Support Options"

Text shown on the button that stops the AI from generating a response. "Stop" or "Cancel Response"

Text shown on the button that copies the chat transcript. "Copy Chat" or "Copy Transcript"

{ [key: string]: any; } | undefined

((props: { message: Message; renderComponent: (name: string, props: Record<string, unknown>) => React.ReactNode; renderMarkdown: (text: string) => React.ReactNode; }, target: HTMLElement, context: null) => void | React.ReactNode) | undefined

((props: { tool: ToolUIPart; approve: (approved?: boolean) => Promise<void>; renderMarkdown: (text: string) => React.ReactNode; }, target: HTMLElement, context: null) => void | React.ReactNode) | undefined

Integrate Inkeep's sidebar chat component into your React application for seamless agent conversations.

Use the chat button component in Next.js with App Router and dynamic import.

Tell us how this can be better.

**Examples:**

Example 1 (yaml):
```yaml
colorMode: {
  sync: {
    // Watch the document root for theme changes
    target: document.documentElement,
    // Monitor the data-theme attribute
    attributes: ['data-theme'],
    // Determine dark mode based on attribute value
    isDarkMode: (attrs) => attrs['data-theme'] === 'dark',
    // Optional callback when color mode changes
    onChange: (mode) => console.log('Color mode changed to:', mode)
  }
}
```

Example 2 (yaml):
```yaml
action: {
  type: 'open_form',
  formSettings: {
    title: 'Open Form',
    description: 'Open a form',
  },
}
```

Example 3 (yaml):
```yaml
action: {
  type: 'open_link',
  url: 'https://example.com',
}
```

Example 4 (yaml):
```yaml
action: {
  type: 'invoke_callback',
  callback: (args: InvokeCallbackArgs) => {
    console.log(args)
  },
}
```

---

## Custom Trigger for JavaScript - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/javascript/custom-trigger

**Contents:**
- Custom Trigger for JavaScript
- Overview
- Quick Start
- Config
  - InkeepBaseSettings
    - ColorModeConfig
    - UserProperties
  - InkeepAIChatSettings
    - AIChatFunctions
    - AIChatDisclaimerSettings

Create custom UI elements to trigger Inkeep modals with complete control over appearance and behavior in JavaScript.

Custom triggers give you complete control over how users open Inkeep modals in your JavaScript application. Instead of using pre-built widgets like Inkeep.ChatButton(), you can create your own UI elements that match your design system while maintaining full functionality.

Add the below <script> tag to the <head> or <body> of your website.

Insert the ModalChat widget by using the Inkeep.ModalChat() function.

Modal settings for the chat modal.

OpenSettingsModal | undefined

Whether to show the chat.

Whether to autofocus the chat input on load.

"no-shadow" | "container-with-shadow" | undefined

ComponentType<InkeepEmbeddedChatProps> | undefined

Configuration for the base settings.

InkeepBaseSettings | undefined

Configuration for the chat.

(InkeepAIChatSettings & { shouldAutoFocusInput?: boolean; }) | undefined

The display name of your organization that will be shown in various UI elements. For example, this may appear in chat messages or headers.

The primary brand color used throughout the widget UI. This color will be used to generate a cohesive color scheme. Should be provided as a valid CSS color value (hex, rgb, etc).

Settings to control the color mode (light/dark) behavior. Can be used to sync with your application's theme or set a forced color mode.

ColorModeConfig | undefined

Theme customization settings for the widget. Allows customizing colors, typography, component styles, and more.

UserTheme | undefined

Custom icon overrides for the default icon set. Allows replacing any of the built-in icons with your own components.

CustomIconMap | undefined

Properties to identify and provide context about the current user. Used for personalization and analytics tracking.

UserProperties | undefined

Authentication token for the current user. Used for authenticated API requests if required.

Async callback that returns a JWT for authenticated chat sessions. When provided, the widget uses JWT-based auth instead of anonymous sessions. The callback is re-invoked automatically on 401 responses to refresh the token.

(() => Promise<string>) | undefined

Additional properties to be sent with analytics events. These properties will be merged with the event properties.

Record<string, unknown> | undefined

Handler for analytics events from the widget.

((event: InkeepCallbackEvent) => Promise<void>) | undefined

The analytics event object

Promise that resolves when the event is logged

Handler for feedback events from the widget.

((feedback: InkeepFeedback & { properties?: Record<string, unknown>; }) => Promise<InkeepFeedback>) | undefined

Whether to bypass the captcha challenge. Only enable this flag if using a server side API type api key, otherwise the api requests will fail without the challenge solution.

Privacy and cookie preferences configuration.

PrivacyPreferences | undefined

Function to transform source data before display.

TransformSource | undefined

The original source data

The type of source data

The options for the transform source

The transformed source data

Reference to the shadow DOM host element if using custom Shadow DOM. Required when embedding the widget within a Shadow DOM.

HTMLElement | null | undefined

Reference to the root element where the widget is mounted. Used for positioning and event handling.

HTMLElement | null | undefined

Custom tags for widget identification. Used in analytics to segment and filter widget instances. Array of string identifiers.

Instance of the Prism syntax highlighting library. Required for code block syntax highlighting functionality.

Query parameters to automatically append to URLs in the widget. Useful for tracking or maintaining context in navigation. Object mapping parameter names to values.

UrlQueryParam | undefined

Base-level filters to apply to all search and chat operations. These are typically organization or user-level filters.

SearchAndChatFilters | undefined

Configuration for syncing the widget's color mode with an external element.

This allows the widget to automatically match its color mode (light/dark) with your application's theme. The widget will observe changes to specified attributes on a target element and update its appearance accordingly.

SyncColorMode | undefined

List of all available colorMode names

Forced colorMode name for the current page

Whether to switch between dark and light colorModes based on prefers-color-scheme

Disable all CSS transitions when switching colorModes

Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons

Key used to store colorMode setting in localStorage

Default colorMode name (for v0.0.12 and lower the default was light). If enableSystem is false, the default colorMode is light

HTML attribute modified based on the active colorMode. Accepts class and data-* (meaning any data attribute, data-mode, data-color, etc.)

"class" | (string & {}) | undefined

Mapping of colorMode name to HTML attribute value. Object where key is the colorMode name and value is the attribute value

ValueObject | undefined

Nonce string to pass to the inline script for CSP headers

Record<string, string> | undefined

App ID for requests, can be generated in the Inkeep dashboard

Base API URL for token exchange, captcha challenge, and the chat run api

https://api.agents.inkeep.com

Base API URL for analytics events (POST /run/v1/events). Defaults to baseUrl when not set.

Context to be passed to the chatstream API.

Record<string, unknown> | undefined

Files to be passed to the chatstream API. Attached to the next outgoing message. Re-queued whenever the array content changes (diffed by filename, mediaType, and size), so new or updated files are sent on the next message. Already-sent files are not re-attached unless the content changes.

FileUIPart[] | undefined

Transform the file attachments displayed on a user message before they render as chips. Called per message at render time with the message's file parts, for live and history-loaded messages alike. The input includes all of the message's file parts regardless of MIME type; the widget's accepted-file-types filter is re-applied to the returned list, so unsupported types still never render. Return the parts to display: omit entries to hide them, or return shallow-modified copies (for example, with a friendlier filename) to rename them. Display-only, so it does not affect what is sent to the agent, stored, or visible to the LLM. Not a security boundary: hidden parts are still sent, stored in conversation history, and present in client memory, and if the transformer throws or returns a non-array, the widget fails open and renders the original untransformed parts. Null entries in a returned array are dropped, treated as intent to omit rather than as a failure. Every returned (whitelisted) part is displayed verbatim, so returning entries that were not in the input adds chips for files the user never attached. Must be pure and cheap, since it runs on every message render. Return new or copied objects and do not mutate the input parts.

((files: FileUIPart[]) => Array<FileUIPart | null | undefined>) | undefined

The placeholder text to display in the chat input field when empty. Use this to provide guidance on what kind of questions users can ask. "Ask me anything about our API documentation..."

A welcome message shown at the start of a new chat session. Supports markdown formatting for rich text styling. Use this to introduce the AI assistant's capabilities and set expectations. "👋 Hi! I'm here to help you with technical questions about our API..."

The name of the product/service/topic that the chat assistant specializes in. This helps contextualize the chat experience for users. If not provided, defaults to the organization name from base settings. "MongoDB Atlas" or "React Router"

The display name for the AI assistant in the chat interface. Choose a name that reflects the assistant's role and your brand. "Atlas Assistant" or "DevBot"

URL to the AI assistant's avatar image. Should be a square image, recommended size 40x40px. Supports common image formats (PNG, JPG, SVG).

You can pass a string or an object to configure for different color modes. { light: 'https://example.com/avatar-light.png', dark: 'https://example.com/avatar-dark.png', }

string | { light: string; dark: string; } | undefined

URL to the user's avatar image in the chat interface. Should be a square image, recommended size 40x40px. Falls back to a default user icon if not provided.

Controls whether links in chat messages open in new browser tabs. Enable this to help users maintain their chat context when following links.

Custom heading text for the example questions section. Use this to better describe your suggested queries. "Common Questions" or "Try asking about..."

A list of pre-written questions users can click to quickly start a conversation. These should reflect common use cases and help users understand the AI assistant's capabilities. ["How do I reset my password?", "What are the API rate limits?"] or [{ value: "How do I reset my password?", label: "How do I reset my password?" }, { value: "What are the API rate limits?", label: "What are the API rate limits?" }]

string[] | { value: string; label: string; }[] | undefined

Whether to visually emphasize the first example question. Use this to draw attention to the most important or common query.

Enables the ability to share chat conversations via URL. Useful for allowing users to share helpful conversations with teammates.

The base URL path used when generating shareable chat links. Should match your application's routing structure. "/shared-chats/" or "/support/conversations/"

Controls the visibility of the copy chat button. Allows users to copy the entire chat transcript to their clipboard.

Unique identifier for loading a specific conversation. Use this to restore a previous conversation state. If the conversation is not found, a new conversation is started.

Pre-fetched conversation messages to render without fetching. Requires conversationId to be set.

Message[] | undefined

When enabled, prevents users from sending new messages. Useful for displaying archived or shared chat sessions.

Whether to make conversations public by default.

"public" | "private" | undefined

Controls the visibility of the chat history button, which opens the list of previous chats.

Configuration for the chat's disclaimer message. Use this to display important notices about AI limitations or data usage.

AIChatDisclaimerSettings | undefined

Callback function triggered whenever the user modifies their input message.

((message: string) => void) | undefined

The current content of the input field

React ref for accessing the chat component's methods. Enables programmatic control of chat functions from parent components.

Ref<AIChatFunctions> | undefined

Array of actions available in the "Get Help" menu. Use this to provide alternative support options like contact forms or documentation links.

GetHelpOption[] | undefined

Array of actions available rendered after each message.

CustomMessageAction[] | undefined

Custom labels for the chat interface's action buttons. Use this for internationalization or to better match your application's terminology.

AIChatToolbarButtonLabels | undefined

Filters to apply to the chat results.

SearchAndChatFilters | undefined

Components to be rendered in the chat interface.

ComponentsConfig<any> | undefined

ComponentsConfig<any> | undefined

Controls whether the chat automatically scrolls to the bottom during streaming. When false, streaming auto-scroll is disabled but the chat still scrolls to bottom when the user sends a new message.

Programmatically sends a message in the chat.

(message?: string) => void

Optional message text. If omitted, sends the current input value.

Programmatically updates the text in the chat input field.

(message: string) => void

The new message text to set

Resets the chat to its initial state. Removes all messages and resets the chat.

Displays a form overlay in the chat interface.

(formSettings: AIChatFormSettings, getHelpOption?: GetHelpOption) => void

Configuration object defining the form's fields and behavior

Optional getHelpOption that triggered the form (for analytics)

Programmatically sets focus to the chat input field. Useful after programmatic updates or when showing the chat interface.

Controls whether the disclaimer message is shown. Enable this when you need to display important notices or legal disclaimers.

The main text content of the disclaimer message. Should clearly communicate important information about AI usage or limitations. "AI responses are generated automatically and may require verification."

Additional information shown when hovering over the disclaimer. Use this to provide more detailed explanations or context.

InkeepCustomIcon | undefined

Action to be performed when the option is clicked.

Icon to be displayed next to the label.

InkeepCustomIcon | undefined

Action to be performed when the option is clicked.

Text shown on the button that clears the chat history. "Clear Chat" or "Start Over"

Text shown on the button that generates a shareable chat link. "Share Chat" or "Get Link"

Text shown on the button that opens the help options menu. "Get Help" or "Support Options"

Text shown on the button that stops the AI from generating a response. "Stop" or "Cancel Response"

Text shown on the button that copies the chat transcript. "Copy Chat" or "Copy Transcript"

{ [key: string]: any; } | undefined

((props: { message: Message; renderComponent: (name: string, props: Record<string, unknown>) => React.ReactNode; renderMarkdown: (text: string) => React.ReactNode; }, target: HTMLElement, context: null) => void | React.ReactNode) | undefined

((props: { tool: ToolUIPart; approve: (approved?: boolean) => Promise<void>; renderMarkdown: (text: string) => React.ReactNode; }, target: HTMLElement, context: null) => void | React.ReactNode) | undefined

The trigger selector.

The selector to trigger the modal when clicked.

'[data-inkeep-modal-trigger]'

Controls whether the component is open.

Handler called when the component opens or closes.

((isOpen: boolean) => void) | undefined

Whether the component is open by default.

The key to trigger the component when pressed with Cmd (Mac) / Ctrl (Windows).

Set to null to disable the shortcut.

string | null | undefined

Learn how to use the chat button component in JavaScript

Integrate Inkeep's sidebar chat component into your JavaScript application for seamless agent conversations.

Tell us how this can be better.

**Examples:**

Example 1 (jsx):
```jsx
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@inkeep/agents-ui-js-cloud@0.17/dist/embed.js"
  defer
></script>
```

Example 2 (javascript):
```javascript
const config = {
  aiChatSettings: {
    baseUrl: "https://your-api.example.com",
    appId: process.env.INKEEP_APP_ID, // Your app ID
    aiAssistantName: "Keepie",
  },
  openSettings: {
    onOpenChange: handleOpenChange,
  },
};

// Initialize modal chat
const modalChat = Inkeep.ModalChat(config);

function handleOpenChange(newOpen) {
  modalChat.update({ openSettings: { isOpen: newOpen } });
}

// trigger
document.querySelector("#chat-button").addEventListener("click", () => {
  modalChat.update({ openSettings: { isOpen: true } });
});

// Access chat methods
modalChat.clearChat();
```

Example 3 (yaml):
```yaml
colorMode: {
  sync: {
    // Watch the document root for theme changes
    target: document.documentElement,
    // Monitor the data-theme attribute
    attributes: ['data-theme'],
    // Determine dark mode based on attribute value
    isDarkMode: (attrs) => attrs['data-theme'] === 'dark',
    // Optional callback when color mode changes
    onChange: (mode) => console.log('Color mode changed to:', mode)
  }
}
```

Example 4 (yaml):
```yaml
action: {
  type: 'open_form',
  formSettings: {
    title: 'Open Form',
    description: 'Open a form',
  },
}
```

---

## Custom Trigger for Next.js - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/nextjs/custom-trigger

**Contents:**
- Custom Trigger for Next.js
- Installation
- Quick Start
- Props
  - InkeepBaseSettings
    - ColorModeConfig
    - UserProperties
  - InkeepAIChatSettings
    - AIChatFunctions
    - AIChatDisclaimerSettings

Create custom UI elements to trigger Inkeep modals in Next.js with App Router and dynamic import.

For Next.js apps that use App Router, use the "use client" directive at the top of the file to load the widget client-side.

Custom triggers give you complete control over how users open Inkeep modals in your Next.js application. Load InkeepModalChat with next/dynamic and ssr: false.

Modal settings for the chat modal.

OpenSettingsModal | undefined

Whether to show the chat.

Whether to autofocus the chat input on load.

"no-shadow" | "container-with-shadow" | undefined

ComponentType<InkeepEmbeddedChatProps> | undefined

Configuration for the base settings.

InkeepBaseSettings | undefined

Configuration for the chat.

(InkeepAIChatSettings & { shouldAutoFocusInput?: boolean; }) | undefined

The display name of your organization that will be shown in various UI elements. For example, this may appear in chat messages or headers.

The primary brand color used throughout the widget UI. This color will be used to generate a cohesive color scheme. Should be provided as a valid CSS color value (hex, rgb, etc).

Settings to control the color mode (light/dark) behavior. Can be used to sync with your application's theme or set a forced color mode.

ColorModeConfig | undefined

Theme customization settings for the widget. Allows customizing colors, typography, component styles, and more.

UserTheme | undefined

Custom icon overrides for the default icon set. Allows replacing any of the built-in icons with your own components.

CustomIconMap | undefined

Properties to identify and provide context about the current user. Used for personalization and analytics tracking.

UserProperties | undefined

Authentication token for the current user. Used for authenticated API requests if required.

Async callback that returns a JWT for authenticated chat sessions. When provided, the widget uses JWT-based auth instead of anonymous sessions. The callback is re-invoked automatically on 401 responses to refresh the token.

(() => Promise<string>) | undefined

Additional properties to be sent with analytics events. These properties will be merged with the event properties.

Record<string, unknown> | undefined

Handler for analytics events from the widget.

((event: InkeepCallbackEvent) => Promise<void>) | undefined

The analytics event object

Promise that resolves when the event is logged

Handler for feedback events from the widget.

((feedback: InkeepFeedback & { properties?: Record<string, unknown>; }) => Promise<InkeepFeedback>) | undefined

Whether to bypass the captcha challenge. Only enable this flag if using a server side API type api key, otherwise the api requests will fail without the challenge solution.

Privacy and cookie preferences configuration.

PrivacyPreferences | undefined

Function to transform source data before display.

TransformSource | undefined

The original source data

The type of source data

The options for the transform source

The transformed source data

Reference to the shadow DOM host element if using custom Shadow DOM. Required when embedding the widget within a Shadow DOM.

HTMLElement | null | undefined

Reference to the root element where the widget is mounted. Used for positioning and event handling.

HTMLElement | null | undefined

Custom tags for widget identification. Used in analytics to segment and filter widget instances. Array of string identifiers.

Instance of the Prism syntax highlighting library. Required for code block syntax highlighting functionality.

Query parameters to automatically append to URLs in the widget. Useful for tracking or maintaining context in navigation. Object mapping parameter names to values.

UrlQueryParam | undefined

Base-level filters to apply to all search and chat operations. These are typically organization or user-level filters.

SearchAndChatFilters | undefined

Configuration for syncing the widget's color mode with an external element.

This allows the widget to automatically match its color mode (light/dark) with your application's theme. The widget will observe changes to specified attributes on a target element and update its appearance accordingly.

SyncColorMode | undefined

List of all available colorMode names

Forced colorMode name for the current page

Whether to switch between dark and light colorModes based on prefers-color-scheme

Disable all CSS transitions when switching colorModes

Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons

Key used to store colorMode setting in localStorage

Default colorMode name (for v0.0.12 and lower the default was light). If enableSystem is false, the default colorMode is light

HTML attribute modified based on the active colorMode. Accepts class and data-* (meaning any data attribute, data-mode, data-color, etc.)

"class" | (string & {}) | undefined

Mapping of colorMode name to HTML attribute value. Object where key is the colorMode name and value is the attribute value

ValueObject | undefined

Nonce string to pass to the inline script for CSP headers

Record<string, string> | undefined

App ID for requests, can be generated in the Inkeep dashboard

Base API URL for token exchange, captcha challenge, and the chat run api

https://api.agents.inkeep.com

Base API URL for analytics events (POST /run/v1/events). Defaults to baseUrl when not set.

Context to be passed to the chatstream API.

Record<string, unknown> | undefined

Files to be passed to the chatstream API. Attached to the next outgoing message. Re-queued whenever the array content changes (diffed by filename, mediaType, and size), so new or updated files are sent on the next message. Already-sent files are not re-attached unless the content changes.

FileUIPart[] | undefined

Transform the file attachments displayed on a user message before they render as chips. Called per message at render time with the message's file parts, for live and history-loaded messages alike. The input includes all of the message's file parts regardless of MIME type; the widget's accepted-file-types filter is re-applied to the returned list, so unsupported types still never render. Return the parts to display: omit entries to hide them, or return shallow-modified copies (for example, with a friendlier filename) to rename them. Display-only, so it does not affect what is sent to the agent, stored, or visible to the LLM. Not a security boundary: hidden parts are still sent, stored in conversation history, and present in client memory, and if the transformer throws or returns a non-array, the widget fails open and renders the original untransformed parts. Null entries in a returned array are dropped, treated as intent to omit rather than as a failure. Every returned (whitelisted) part is displayed verbatim, so returning entries that were not in the input adds chips for files the user never attached. Must be pure and cheap, since it runs on every message render. Return new or copied objects and do not mutate the input parts.

((files: FileUIPart[]) => Array<FileUIPart | null | undefined>) | undefined

The placeholder text to display in the chat input field when empty. Use this to provide guidance on what kind of questions users can ask. "Ask me anything about our API documentation..."

A welcome message shown at the start of a new chat session. Supports markdown formatting for rich text styling. Use this to introduce the AI assistant's capabilities and set expectations. "👋 Hi! I'm here to help you with technical questions about our API..."

The name of the product/service/topic that the chat assistant specializes in. This helps contextualize the chat experience for users. If not provided, defaults to the organization name from base settings. "MongoDB Atlas" or "React Router"

The display name for the AI assistant in the chat interface. Choose a name that reflects the assistant's role and your brand. "Atlas Assistant" or "DevBot"

URL to the AI assistant's avatar image. Should be a square image, recommended size 40x40px. Supports common image formats (PNG, JPG, SVG).

You can pass a string or an object to configure for different color modes. { light: 'https://example.com/avatar-light.png', dark: 'https://example.com/avatar-dark.png', }

string | { light: string; dark: string; } | undefined

URL to the user's avatar image in the chat interface. Should be a square image, recommended size 40x40px. Falls back to a default user icon if not provided.

Controls whether links in chat messages open in new browser tabs. Enable this to help users maintain their chat context when following links.

Custom heading text for the example questions section. Use this to better describe your suggested queries. "Common Questions" or "Try asking about..."

A list of pre-written questions users can click to quickly start a conversation. These should reflect common use cases and help users understand the AI assistant's capabilities. ["How do I reset my password?", "What are the API rate limits?"] or [{ value: "How do I reset my password?", label: "How do I reset my password?" }, { value: "What are the API rate limits?", label: "What are the API rate limits?" }]

string[] | { value: string; label: string; }[] | undefined

Whether to visually emphasize the first example question. Use this to draw attention to the most important or common query.

Enables the ability to share chat conversations via URL. Useful for allowing users to share helpful conversations with teammates.

The base URL path used when generating shareable chat links. Should match your application's routing structure. "/shared-chats/" or "/support/conversations/"

Controls the visibility of the copy chat button. Allows users to copy the entire chat transcript to their clipboard.

Unique identifier for loading a specific conversation. Use this to restore a previous conversation state. If the conversation is not found, a new conversation is started.

Pre-fetched conversation messages to render without fetching. Requires conversationId to be set.

Message[] | undefined

When enabled, prevents users from sending new messages. Useful for displaying archived or shared chat sessions.

Whether to make conversations public by default.

"public" | "private" | undefined

Controls the visibility of the chat history button, which opens the list of previous chats.

Configuration for the chat's disclaimer message. Use this to display important notices about AI limitations or data usage.

AIChatDisclaimerSettings | undefined

Callback function triggered whenever the user modifies their input message.

((message: string) => void) | undefined

The current content of the input field

React ref for accessing the chat component's methods. Enables programmatic control of chat functions from parent components.

Ref<AIChatFunctions> | undefined

Array of actions available in the "Get Help" menu. Use this to provide alternative support options like contact forms or documentation links.

GetHelpOption[] | undefined

Array of actions available rendered after each message.

CustomMessageAction[] | undefined

Custom labels for the chat interface's action buttons. Use this for internationalization or to better match your application's terminology.

AIChatToolbarButtonLabels | undefined

Filters to apply to the chat results.

SearchAndChatFilters | undefined

Components to be rendered in the chat interface.

ComponentsConfig<any> | undefined

ComponentsConfig<any> | undefined

Controls whether the chat automatically scrolls to the bottom during streaming. When false, streaming auto-scroll is disabled but the chat still scrolls to bottom when the user sends a new message.

Programmatically sends a message in the chat.

(message?: string) => void

Optional message text. If omitted, sends the current input value.

Programmatically updates the text in the chat input field.

(message: string) => void

The new message text to set

Resets the chat to its initial state. Removes all messages and resets the chat.

Displays a form overlay in the chat interface.

(formSettings: AIChatFormSettings, getHelpOption?: GetHelpOption) => void

Configuration object defining the form's fields and behavior

Optional getHelpOption that triggered the form (for analytics)

Programmatically sets focus to the chat input field. Useful after programmatic updates or when showing the chat interface.

Controls whether the disclaimer message is shown. Enable this when you need to display important notices or legal disclaimers.

The main text content of the disclaimer message. Should clearly communicate important information about AI usage or limitations. "AI responses are generated automatically and may require verification."

Additional information shown when hovering over the disclaimer. Use this to provide more detailed explanations or context.

InkeepCustomIcon | undefined

Action to be performed when the option is clicked.

Icon to be displayed next to the label.

InkeepCustomIcon | undefined

Action to be performed when the option is clicked.

Text shown on the button that clears the chat history. "Clear Chat" or "Start Over"

Text shown on the button that generates a shareable chat link. "Share Chat" or "Get Link"

Text shown on the button that opens the help options menu. "Get Help" or "Support Options"

Text shown on the button that stops the AI from generating a response. "Stop" or "Cancel Response"

Text shown on the button that copies the chat transcript. "Copy Chat" or "Copy Transcript"

{ [key: string]: any; } | undefined

((props: { message: Message; renderComponent: (name: string, props: Record<string, unknown>) => React.ReactNode; renderMarkdown: (text: string) => React.ReactNode; }, target: HTMLElement, context: null) => void | React.ReactNode) | undefined

((props: { tool: ToolUIPart; approve: (approved?: boolean) => Promise<void>; renderMarkdown: (text: string) => React.ReactNode; }, target: HTMLElement, context: null) => void | React.ReactNode) | undefined

The trigger selector.

The selector to trigger the modal when clicked.

'[data-inkeep-modal-trigger]'

Controls whether the component is open.

Handler called when the component opens or closes.

((isOpen: boolean) => void) | undefined

Whether the component is open by default.

The key to trigger the component when pressed with Cmd (Mac) / Ctrl (Windows).

Set to null to disable the shortcut.

string | null | undefined

Use the chat button component in Next.js with App Router and dynamic import.

Integrate Inkeep's sidebar chat component in Next.js with App Router and dynamic import.

Tell us how this can be better.

**Examples:**

Example 1 (yaml):
```yaml
colorMode: {
  sync: {
    // Watch the document root for theme changes
    target: document.documentElement,
    // Monitor the data-theme attribute
    attributes: ['data-theme'],
    // Determine dark mode based on attribute value
    isDarkMode: (attrs) => attrs['data-theme'] === 'dark',
    // Optional callback when color mode changes
    onChange: (mode) => console.log('Color mode changed to:', mode)
  }
}
```

Example 2 (yaml):
```yaml
action: {
  type: 'open_form',
  formSettings: {
    title: 'Open Form',
    description: 'Open a form',
  },
}
```

Example 3 (yaml):
```yaml
action: {
  type: 'open_link',
  url: 'https://example.com',
}
```

Example 4 (yaml):
```yaml
action: {
  type: 'invoke_callback',
  callback: (args: InvokeCallbackArgs) => {
    console.log(args)
  },
}
```

---

## Chat Button - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/react/chat-button

**Contents:**
- Chat Button
- Installation
- Quick Start
- Props
  - InkeepBaseSettings
    - ColorModeConfig
    - UserProperties
  - OpenSettingsChatButton
  - InkeepAIChatSettings
    - AIChatFunctions

Learn how to use the chat button component in React

The chat button component is a simple way to trigger the Inkeep chat bubble.

Label for the chat button.

URL to the AI assistant's avatar image. Should be a square image, recommended size 40x40px. Supports common image formats (PNG, JPG, SVG).

You can pass a string or an object to configure for different color modes. { light: 'https://example.com/avatar-light.png', dark: 'https://example.com/avatar-dark.png', }

string | { light: string; dark: string; } | undefined

OpenSettingsChatButton | undefined

Whether to autofocus the chat input on load.

Configuration for the base settings.

InkeepBaseSettings | undefined

Configuration for the chat.

(InkeepAIChatSettings & { shouldAutoFocusInput?: boolean; }) | undefined

The display name of your organization that will be shown in various UI elements. For example, this may appear in chat messages or headers.

The primary brand color used throughout the widget UI. This color will be used to generate a cohesive color scheme. Should be provided as a valid CSS color value (hex, rgb, etc).

Settings to control the color mode (light/dark) behavior. Can be used to sync with your application's theme or set a forced color mode.

ColorModeConfig | undefined

Theme customization settings for the widget. Allows customizing colors, typography, component styles, and more.

UserTheme | undefined

Custom icon overrides for the default icon set. Allows replacing any of the built-in icons with your own components.

CustomIconMap | undefined

Properties to identify and provide context about the current user. Used for personalization and analytics tracking.

UserProperties | undefined

Authentication token for the current user. Used for authenticated API requests if required.

Async callback that returns a JWT for authenticated chat sessions. When provided, the widget uses JWT-based auth instead of anonymous sessions. The callback is re-invoked automatically on 401 responses to refresh the token.

(() => Promise<string>) | undefined

Additional properties to be sent with analytics events. These properties will be merged with the event properties.

Record<string, unknown> | undefined

Handler for analytics events from the widget.

((event: InkeepCallbackEvent) => Promise<void>) | undefined

The analytics event object

Promise that resolves when the event is logged

Handler for feedback events from the widget.

((feedback: InkeepFeedback & { properties?: Record<string, unknown>; }) => Promise<InkeepFeedback>) | undefined

Whether to bypass the captcha challenge. Only enable this flag if using a server side API type api key, otherwise the api requests will fail without the challenge solution.

Privacy and cookie preferences configuration.

PrivacyPreferences | undefined

Function to transform source data before display.

TransformSource | undefined

The original source data

The type of source data

The options for the transform source

The transformed source data

Reference to the shadow DOM host element if using custom Shadow DOM. Required when embedding the widget within a Shadow DOM.

HTMLElement | null | undefined

Reference to the root element where the widget is mounted. Used for positioning and event handling.

HTMLElement | null | undefined

Custom tags for widget identification. Used in analytics to segment and filter widget instances. Array of string identifiers.

Instance of the Prism syntax highlighting library. Required for code block syntax highlighting functionality.

Query parameters to automatically append to URLs in the widget. Useful for tracking or maintaining context in navigation. Object mapping parameter names to values.

UrlQueryParam | undefined

Base-level filters to apply to all search and chat operations. These are typically organization or user-level filters.

SearchAndChatFilters | undefined

Configuration for syncing the widget's color mode with an external element.

This allows the widget to automatically match its color mode (light/dark) with your application's theme. The widget will observe changes to specified attributes on a target element and update its appearance accordingly.

SyncColorMode | undefined

List of all available colorMode names

Forced colorMode name for the current page

Whether to switch between dark and light colorModes based on prefers-color-scheme

Disable all CSS transitions when switching colorModes

Whether to indicate to browsers which color scheme is used (dark or light) for built-in UI like inputs and buttons

Key used to store colorMode setting in localStorage

Default colorMode name (for v0.0.12 and lower the default was light). If enableSystem is false, the default colorMode is light

HTML attribute modified based on the active colorMode. Accepts class and data-* (meaning any data attribute, data-mode, data-color, etc.)

"class" | (string & {}) | undefined

Mapping of colorMode name to HTML attribute value. Object where key is the colorMode name and value is the attribute value

ValueObject | undefined

Nonce string to pass to the inline script for CSP headers

Controls whether the component is open.

Handler called when the component opens or closes.

((isOpen: boolean) => void) | undefined

Whether the component is open by default.

The key to trigger the component when pressed with Cmd (Mac) / Ctrl (Windows).

Set to null to disable the shortcut.

string | null | undefined

The trigger selector.

The selector to trigger the component when clicked.

Record<string, string> | undefined

App ID for requests, can be generated in the Inkeep dashboard

Base API URL for token exchange, captcha challenge, and the chat run api

https://api.agents.inkeep.com

Base API URL for analytics events (POST /run/v1/events). Defaults to baseUrl when not set.

Context to be passed to the chatstream API.

Record<string, unknown> | undefined

Files to be passed to the chatstream API. Attached to the next outgoing message. Re-queued whenever the array content changes (diffed by filename, mediaType, and size), so new or updated files are sent on the next message. Already-sent files are not re-attached unless the content changes.

FileUIPart[] | undefined

Transform the file attachments displayed on a user message before they render as chips. Called per message at render time with the message's file parts, for live and history-loaded messages alike. The input includes all of the message's file parts regardless of MIME type; the widget's accepted-file-types filter is re-applied to the returned list, so unsupported types still never render. Return the parts to display: omit entries to hide them, or return shallow-modified copies (for example, with a friendlier filename) to rename them. Display-only, so it does not affect what is sent to the agent, stored, or visible to the LLM. Not a security boundary: hidden parts are still sent, stored in conversation history, and present in client memory, and if the transformer throws or returns a non-array, the widget fails open and renders the original untransformed parts. Null entries in a returned array are dropped, treated as intent to omit rather than as a failure. Every returned (whitelisted) part is displayed verbatim, so returning entries that were not in the input adds chips for files the user never attached. Must be pure and cheap, since it runs on every message render. Return new or copied objects and do not mutate the input parts.

((files: FileUIPart[]) => Array<FileUIPart | null | undefined>) | undefined

The placeholder text to display in the chat input field when empty. Use this to provide guidance on what kind of questions users can ask. "Ask me anything about our API documentation..."

A welcome message shown at the start of a new chat session. Supports markdown formatting for rich text styling. Use this to introduce the AI assistant's capabilities and set expectations. "👋 Hi! I'm here to help you with technical questions about our API..."

The name of the product/service/topic that the chat assistant specializes in. This helps contextualize the chat experience for users. If not provided, defaults to the organization name from base settings. "MongoDB Atlas" or "React Router"

The display name for the AI assistant in the chat interface. Choose a name that reflects the assistant's role and your brand. "Atlas Assistant" or "DevBot"

URL to the AI assistant's avatar image. Should be a square image, recommended size 40x40px. Supports common image formats (PNG, JPG, SVG).

You can pass a string or an object to configure for different color modes. { light: 'https://example.com/avatar-light.png', dark: 'https://example.com/avatar-dark.png', }

string | { light: string; dark: string; } | undefined

URL to the user's avatar image in the chat interface. Should be a square image, recommended size 40x40px. Falls back to a default user icon if not provided.

Controls whether links in chat messages open in new browser tabs. Enable this to help users maintain their chat context when following links.

Custom heading text for the example questions section. Use this to better describe your suggested queries. "Common Questions" or "Try asking about..."

A list of pre-written questions users can click to quickly start a conversation. These should reflect common use cases and help users understand the AI assistant's capabilities. ["How do I reset my password?", "What are the API rate limits?"] or [{ value: "How do I reset my password?", label: "How do I reset my password?" }, { value: "What are the API rate limits?", label: "What are the API rate limits?" }]

string[] | { value: string; label: string; }[] | undefined

Whether to visually emphasize the first example question. Use this to draw attention to the most important or common query.

Enables the ability to share chat conversations via URL. Useful for allowing users to share helpful conversations with teammates.

The base URL path used when generating shareable chat links. Should match your application's routing structure. "/shared-chats/" or "/support/conversations/"

Controls the visibility of the copy chat button. Allows users to copy the entire chat transcript to their clipboard.

Unique identifier for loading a specific conversation. Use this to restore a previous conversation state. If the conversation is not found, a new conversation is started.

Pre-fetched conversation messages to render without fetching. Requires conversationId to be set.

Message[] | undefined

When enabled, prevents users from sending new messages. Useful for displaying archived or shared chat sessions.

Whether to make conversations public by default.

"public" | "private" | undefined

Controls the visibility of the chat history button, which opens the list of previous chats.

Configuration for the chat's disclaimer message. Use this to display important notices about AI limitations or data usage.

AIChatDisclaimerSettings | undefined

Callback function triggered whenever the user modifies their input message.

((message: string) => void) | undefined

The current content of the input field

React ref for accessing the chat component's methods. Enables programmatic control of chat functions from parent components.

Ref<AIChatFunctions> | undefined

Array of actions available in the "Get Help" menu. Use this to provide alternative support options like contact forms or documentation links.

GetHelpOption[] | undefined

Array of actions available rendered after each message.

CustomMessageAction[] | undefined

Custom labels for the chat interface's action buttons. Use this for internationalization or to better match your application's terminology.

AIChatToolbarButtonLabels | undefined

Filters to apply to the chat results.

SearchAndChatFilters | undefined

Components to be rendered in the chat interface.

ComponentsConfig<any> | undefined

ComponentsConfig<any> | undefined

Controls whether the chat automatically scrolls to the bottom during streaming. When false, streaming auto-scroll is disabled but the chat still scrolls to bottom when the user sends a new message.

Programmatically sends a message in the chat.

(message?: string) => void

Optional message text. If omitted, sends the current input value.

Programmatically updates the text in the chat input field.

(message: string) => void

The new message text to set

Resets the chat to its initial state. Removes all messages and resets the chat.

Displays a form overlay in the chat interface.

(formSettings: AIChatFormSettings, getHelpOption?: GetHelpOption) => void

Configuration object defining the form's fields and behavior

Optional getHelpOption that triggered the form (for analytics)

Programmatically sets focus to the chat input field. Useful after programmatic updates or when showing the chat interface.

Controls whether the disclaimer message is shown. Enable this when you need to display important notices or legal disclaimers.

The main text content of the disclaimer message. Should clearly communicate important information about AI usage or limitations. "AI responses are generated automatically and may require verification."

Additional information shown when hovering over the disclaimer. Use this to provide more detailed explanations or context.

InkeepCustomIcon | undefined

Action to be performed when the option is clicked.

Icon to be displayed next to the label.

InkeepCustomIcon | undefined

Action to be performed when the option is clicked.

Text shown on the button that clears the chat history. "Clear Chat" or "Start Over"

Text shown on the button that generates a shareable chat link. "Share Chat" or "Get Link"

Text shown on the button that opens the help options menu. "Get Help" or "Support Options"

Text shown on the button that stops the AI from generating a response. "Stop" or "Cancel Response"

Text shown on the button that copies the chat transcript. "Copy Chat" or "Copy Transcript"

{ [key: string]: any; } | undefined

((props: { message: Message; renderComponent: (name: string, props: Record<string, unknown>) => React.ReactNode; renderMarkdown: (text: string) => React.ReactNode; }, target: HTMLElement, context: null) => void | React.ReactNode) | undefined

((props: { tool: ToolUIPart; approve: (approved?: boolean) => Promise<void>; renderMarkdown: (text: string) => React.ReactNode; }, target: HTMLElement, context: null) => void | React.ReactNode) | undefined

Pre-built chat components to integrate Inkeep agents into your application

Create custom UI elements to trigger Inkeep modals with complete control over appearance and behavior.

Tell us how this can be better.

**Examples:**

Example 1 (yaml):
```yaml
colorMode: {
  sync: {
    // Watch the document root for theme changes
    target: document.documentElement,
    // Monitor the data-theme attribute
    attributes: ['data-theme'],
    // Determine dark mode based on attribute value
    isDarkMode: (attrs) => attrs['data-theme'] === 'dark',
    // Optional callback when color mode changes
    onChange: (mode) => console.log('Color mode changed to:', mode)
  }
}
```

Example 2 (yaml):
```yaml
action: {
  type: 'open_form',
  formSettings: {
    title: 'Open Form',
    description: 'Open a form',
  },
}
```

Example 3 (yaml):
```yaml
action: {
  type: 'open_link',
  url: 'https://example.com',
}
```

Example 4 (yaml):
```yaml
action: {
  type: 'invoke_callback',
  callback: (args: InvokeCallbackArgs) => {
    console.log(args)
  },
}
```

---

## App Credentials - Inkeep Open Source Docs

**URL:** https://docs.inkeep.com/talk-to-your-agents/app-credentials

**Contents:**
- App Credentials
- How anonymous authentication works
- Authenticated chat sessions
  - How it works
  - JWT requirements
  - Supported algorithms
  - Enforcing authentication
  - Verified claims
  - Key management
- Security Model

How app credentials authenticate end-users, including anonymous sessions, authenticated chat sessions with asymmetric key verification, domain validation, and Proof-of-Work protection.

App credentials are the auth mechanism for chat components. This page covers the underlying auth flow, security model, and advanced configuration.

Existing API keys will continue to work for server-to-server integrations. Use App Credentials for new app-based integrations such as web clients, support copilots, and authenticated end-user experiences.

When your widget loads, it authenticates through a two-step flow:

Each session gets a unique anonymous user ID (anon_<uuid>), enabling per-user conversation history.

To refresh a token while preserving the same anonymous identity, include the existing token as an Authorization: Bearer header when requesting a new session. If the token is valid, the server reuses the same user ID (sub claim) and issues a fresh token with a new 30-day expiry. If the token is invalid, expired, or belongs to a different app, a new anonymous identity is created as usual.

In addition to anonymous sessions, apps can be configured for authenticated chat sessions. Your backend signs JWTs with a private key, and Inkeep verifies them using the corresponding public key you upload. This gives each session a verified user identity tied to your system's user IDs.

Generate a key pair — create an asymmetric key pair (RSA, EC, or EdDSA) on your infrastructure.

Upload the public key — register the public key with your app via the API or Visual Builder. Inkeep never sees your private key.

Sign JWTs on your backend — when a user starts a chat session, your server signs a JWT containing the user's identity.

Widget sends the signed JWT — pass a getAuthToken function in baseSettings that fetches a token from your backend route. The widget calls it automatically and includes the JWT as a Bearer token instead of requesting an anonymous session.

Inkeep verifies the signature — the server matches the kid header to a stored public key, verifies the signature, and extracts the user identity from the sub claim.

RSA keys must be at least 2048 bits. Private keys are rejected at upload time — only public keys are accepted.

New apps require authenticated sessions by default. If a signed JWT is missing or verification fails, the request is rejected with a 401 Unauthorized response.

To allow anonymous sessions (e.g., for public-facing widgets that don't require user identity), disable Require Authentication in the app edit dialog. When disabled, requests without a valid JWT fall back to anonymous authentication instead of being rejected.

Non-standard claims in the signed JWT (beyond sub, iat, exp, aud, iss, jti, nbf) are extracted and made available as verified claims in the conversation context. These are cryptographically signed and kept separate from unverified userProperties sent by the client.

Verified claims are limited to 1KB. Tokens with custom claims exceeding this limit are rejected.

Manage public keys from the app edit dialog in the Visual Builder. Navigate to Apps → click the ⋯ menu on your Web Client app → Edit, then scroll to the Authentication Keys section.

From here you can add, view, copy, and delete public keys. Each key requires:

You can register multiple public keys per app. Use this for key rotation — upload a new key before retiring the old one.

Below the keys section, the Audience (aud) field lets you require that signed JWTs include a matching aud claim. When set, tokens without a matching audience are rejected. See Enforcing authentication for the Require Authentication toggle.

Interactive Components

Render clickable components inside AI responses that programmatically send follow-up messages on the user's behalf.

Customize the appearance of Inkeep's components.

Tell us how this can be better.

**Examples:**

Example 1 (yaml):
```yaml
Authorization: Bearer <session_token>
X-Inkeep-App-Id: <app_id>
```

Example 2 (javascript):
```javascript
import { Router } from 'express';
import { SignJWT, importPKCS8 } from 'jose';
import { auth } from '../lib/auth'; // your auth library

const router = Router();

const PRIVATE_KEY_PEM = process.env.INKEEP_SIGNING_KEY!;
const KEY_ID = process.env.INKEEP_KEY_ID!; // matches the kid uploaded to Inkeep

router.post('/api/inkeep-token', async (req, res) => {
  // Verify the user's session with your auth system
  const session = await auth.api.getSession();

  if (!session) {
    return res.status(401).json({ error: 'Not authenticated' });
  }

  const now = Math.floor(Date.now() / 1000);
  const privateKey = await importPKCS8(PRIVATE_KEY_PEM, 'RS256');

  const token = await new SignJWT({
    sub: session.user.id,      // becomes the userId in Inkeep
    email: session.user.email, // optional — available as a verified claim
  })
    .setProtectedHeader({ alg: 'RS256', kid: KEY_ID })
    .setIssuedAt(now)
    .setExpirationTime(now + 3600) // 1 hour
    .sign(privateKey);

  return res.json({ token });
});

export default router;
```

---
