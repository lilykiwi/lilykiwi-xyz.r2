[lilykiwi.xyz](../README.md) / Sidebar

# Namespace: Sidebar

## Table of contents

### Functions

- [SidebarTimeline](Sidebar.md#sidebartimeline)
- [default](Sidebar.md#default)
- [getHeadings](Sidebar.md#getheadings)
- [topToArticleIndex](Sidebar.md#toptoarticleindex)
- [useHeadings](Sidebar.md#useheadings)

## Functions

### SidebarTimeline

▸ **SidebarTimeline**(`props`): `JSX.Element`

SidebarTimeline component

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `Object` | - |
| `props.spy` | `Signal`<`number`\> | scroll position signal |

#### Returns

`JSX.Element`

SidebarTimeline component

**`Remarks`**

This component is a timeline that highlights the current article.

**`Todo`**

Fix the timeline dot position when the page is scrolled to the bottom, where the article isn't the height of the screen.

#### Defined in

[modules/sidebar.tsx:76](https://github.com/lilykiwi/lilykiwi.xyz/blob/a5d9c24/src/modules/sidebar.tsx#L76)

___

### default

▸ **default**(`props`): `JSX.Element`

Sidebar component

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.scrollHook` | `Object` |
| `props.scrollHook.onScroll` | () => `void` |
| `props.scrollHook.value` | `Signal`<`number`\> |

#### Returns

`JSX.Element`

Sidebar component

**`Remarks`**

This component is a sidebar that contains a timeline of the articles along with a scrollspy that highlights the current article.

#### Defined in

[modules/sidebar.tsx:112](https://github.com/lilykiwi/lilykiwi.xyz/blob/a5d9c24/src/modules/sidebar.tsx#L112)

___

### getHeadings

▸ **getHeadings**(`headingElements`): `Element`[]

getHeadings function that returns an array of the headings

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `headingElements` | `NodeListOf`<`Element`\> | list of heading elements |

#### Returns

`Element`[]

#### Defined in

[modules/sidebar.tsx:23](https://github.com/lilykiwi/lilykiwi.xyz/blob/a5d9c24/src/modules/sidebar.tsx#L23)

___

### topToArticleIndex

▸ **topToArticleIndex**(`value`): `number`

topToArticleIndex function that returns the index of the article that is closest to the top

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | scroll position |

#### Returns

`number`

index of the article that is closest to the top

**`Remarks`**

This function is used to determine which article is currently being viewed for the scrollspy.

#### Defined in

[modules/sidebar.tsx:39](https://github.com/lilykiwi/lilykiwi.xyz/blob/a5d9c24/src/modules/sidebar.tsx#L39)

___

### useHeadings

▸ **useHeadings**(): `Signal`<`Element`[]\>

useHeadings hook that returns a signal of the headings

#### Returns

`Signal`<`Element`[]\>

signal of the headings

#### Defined in

[modules/sidebar.tsx:8](https://github.com/lilykiwi/lilykiwi.xyz/blob/a5d9c24/src/modules/sidebar.tsx#L8)
