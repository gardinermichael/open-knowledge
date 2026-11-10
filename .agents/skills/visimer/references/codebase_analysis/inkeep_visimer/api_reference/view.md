# API Reference: view.ts

**Language**: TypeScript

**Source**: `packages/dom/src/view.ts`

---

## Classes

### MermaidCanvasView

**Inherits from**: (none)

#### Methods

##### constructor(options: ViewOptions)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| options | ViewOptions | - | - |


##### currentTool()


##### renderError()


##### setTool(tool: Tool)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| tool | Tool | - | - |


##### setReadOnly(readOnly: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| readOnly | boolean | - | - |


##### setHooks(hooks: ViewHooks)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| hooks | ViewHooks | - | - |


##### setAccentColor(color: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| color | string | - | - |


##### setMermaidConfig(config: Record<string, unknown>)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| config | Record<string | - | - |
| unknown> | None | - | - |


##### addNode(shape: ShapeId = 'rect', label = 'New node')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| shape | ShapeId | 'rect' | - |
| label | None | 'New node' | - |


##### scheduleRender()


##### setupPanZoom()


##### zoomBy(factor: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| factor | number | - | - |


##### zoomAt(clientX: number, clientY: number, factor: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| clientX | number | - | - |
| clientY | number | - | - |
| factor | number | - | - |


##### fitView()


##### applyViewTransform()


##### prepareSvgForPanZoom()


##### render()


##### remeasureWhenFontsSettle()


##### bindSvg()


##### armVisibilityRetry(svg: SVGSVGElement, sequence: SequenceGraph | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| svg | SVGSVGElement | - | - |
| sequence | SequenceGraph | null | - | - |


##### entityFromEvent(e: Event)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | Event | - | - |


##### entityHitFromEvent(e: Event)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | Event | - | - |


##### topmostEntityElement(entityId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | string | - | - |


##### onSvgClick(e: MouseEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | MouseEvent | - | - |


##### entityElementIndex(entityId: string, el: Element)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | string | - | - |
| el | Element | - | - |


##### onSvgDblClick(e: MouseEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | MouseEvent | - | - |


##### onSvgPointerDown(e: PointerEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | PointerEvent | - | - |


##### entityElement(entityId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | string | - | - |


##### onSvgPointerMove(e: PointerEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | PointerEvent | - | - |


##### onSvgPointerUp(e: PointerEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | PointerEvent | - | - |


##### cancelConnect()


##### editEntityLabel(entityId: string, anchorHint?: Element | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | string | - | - |
| anchorHint? | Element | null | - | - |


##### activeInPlaceSession()


##### resumeInPlaceSession(liveEdit?: LiveEdit | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| liveEdit? | LiveEdit | null | - | - |


##### findTextTarget(anchor: Element, current: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| anchor | Element | - | - |
| current | string | - | - |


##### closeInlineEditor(refocus: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| refocus | boolean | - | - |


##### onKeyDown(e: KeyboardEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | KeyboardEvent | - | - |


##### applySelectionStyles()


##### edgeAnchor(entityId: string, hasLabel: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | string | - | - |
| hasLabel | boolean | - | - |


##### hostRect(el: Element)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| el | Element | - | - |


##### pathMidpointRect(path: SVGPathElement)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| path | SVGPathElement | - | - |


##### updatePopover()


##### actionsFor(id: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| id | string | - | - |


##### computeDropSlots()


##### filter((v)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| (v | None | - | - |


##### nearestSlot(y: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| y | number | - | - |


##### showDropIndicator(y: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| y | number | - | - |


##### onLifelineHover(e: PointerEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | PointerEvent | - | - |


##### showLifelinePlus(participantEntity: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| participantEntity | string | - | - |


##### filter((v)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| (v | None | - | - |


##### beginPlusDrag(down: PointerEvent, sourceParticipant: string, afterEvent: string | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| down | PointerEvent | - | - |
| sourceParticipant | string | - | - |
| afterEvent | string | null | - | - |


##### openPlusMenu(button: HTMLElement, participantId: string, afterEvent: string | null)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| button | HTMLElement | - | - |
| participantId | string | - | - |
| afterEvent | string | null | - | - |


##### scheduleLifelineClear()


##### clearLifelineUi()


##### clientToSvg(x: number, y: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| x | number | - | - |
| y | number | - | - |


##### entityCenter(entityId: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entityId | string | - | - |


##### validate()


##### destroy()




## Functions

### arrowHeadSvg(line: EdgeLine, start: EdgeArrow, end: EdgeArrow)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| line | EdgeLine | - | - |
| start | EdgeArrow | - | - |
| end | EdgeArrow | - | - |

**Returns**: (none)



### arrowHeadMark(kind: EdgeArrow, side: 'start' | 'end')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| kind | EdgeArrow | - | - |
| side | 'start' | 'end' | - | - |

**Returns**: (none)



### strokeSvg(line: EdgeLine)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| line | EdgeLine | - | - |

**Returns**: (none)



### curveSvg(curve: FlowCurve)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| curve | FlowCurve | - | - |

**Returns**: (none)



### animSvg(v: EdgeAnimation)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| v | EdgeAnimation | - | - |

**Returns**: (none)



### readFlowCurve(code: string)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| code | string | - | - |

**Returns**: (none)



### readEdgeAnimation(code: string, edgeOrder: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| code | string | - | - |
| edgeOrder | number | - | - |

**Returns**: (none)



### injectAnimationKeyframes(svg: SVGElement)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| svg | SVGElement | - | - |

**Returns**: (none)



### readLabelHtml(label: HTMLElement)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| label | HTMLElement | - | - |

**Returns**: (none)



### readLabelSnapshot(label: HTMLElement)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| label | HTMLElement | - | - |

**Returns**: (none)



### caretOffsetWithin(root: HTMLElement)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| root | HTMLElement | - | - |

**Returns**: (none)



### placeCaretAt(root: HTMLElement, offset: number)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| root | HTMLElement | - | - |
| offset | number | - | - |

**Returns**: (none)



### keydown(e: KeyboardEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | KeyboardEvent | - | - |

**Returns**: (none)



### docPointerDown(e: PointerEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | PointerEvent | - | - |

**Returns**: (none)



### onWheel(e: WheelEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | WheelEvent | - | - |

**Returns**: (none)



### onDown(e: PointerEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | PointerEvent | - | - |

**Returns**: (none)



### onMove(e: PointerEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | PointerEvent | - | - |

**Returns**: (none)



### onUp(e: PointerEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | PointerEvent | - | - |

**Returns**: (none)



### btn(title: string, iconMarkup: string, fn: ()

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| title | string | - | - |
| iconMarkup | string | - | - |
| fn | ( | - | - |

**Returns**: (none)



### remeasure()

**Returns**: (none)



### rememberCaret()

**Returns**: (none)



### liveCommit()

**Returns**: (none)



### finish(commit: boolean)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| commit | boolean | - | - |

**Returns**: (none)



### onInput()

**Returns**: (none)



### onKey(e: KeyboardEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | KeyboardEvent | - | - |

**Returns**: (none)



### onBlur()

**Returns**: (none)



### isLeafText(el: Element)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| el | Element | - | - |

**Returns**: (none)



### commit()

**Returns**: (none)



### onMove(e: PointerEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | PointerEvent | - | - |

**Returns**: (none)



### cleanup()

**Returns**: (none)



### onUp(e: PointerEvent)

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| e | PointerEvent | - | - |

**Returns**: (none)



### item(label: string, fn: ()

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | - |
| fn | ( | - | - |

**Returns**: (none)



### note(label: string, placement: 'over' | 'left of' | 'right of')

**Parameters**:

| Name | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | - |
| placement | 'over' | 'left of' | 'right of' | - | - |

**Returns**: (none)


