[lilykiwi.xyz](../README.md) / Content

# Namespace: Content

## Table of contents

### Functions

- [AboutMe](Content.md#aboutme)
- [Article](Content.md#article)
- [Body](Content.md#body)
- [Header](Content.md#header)
- [Repositories](Content.md#repositories)
- [Segment](Content.md#segment)
- [TimeFormat](Content.md#timeformat)
- [default](Content.md#default)

## Functions

### AboutMe

▸ **AboutMe**(): `JSX.Element`

@todo: document this

#### Returns

`JSX.Element`

#### Defined in

[modules/content.tsx:50](https://github.com/lilykiwi/lilykiwi.xyz/blob/ada3f36/src/modules/content.tsx#L50)

___

### Article

▸ **Article**(`props`): `JSX.Element`

@todo: document this

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.children` | `any` |
| `props.id` | `string` \| `number` |
| `props.title` | `string` |

#### Returns

`JSX.Element`

#### Defined in

[modules/content.tsx:36](https://github.com/lilykiwi/lilykiwi.xyz/blob/ada3f36/src/modules/content.tsx#L36)

___

### Body

▸ **Body**(`props`): `JSX.Element`

Body component that contains the content of the article

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `Object` | children of the body |
| `props.children` | `any` | - |

#### Returns

`JSX.Element`

Body component

**`Remarks`**

This component is probably unnecessary, all it does is wrap its' contents in a div with the class "body". Unlike Header, this is not used in the sidebar, and is a general wrapper for the content of the article. Styles are applied based on this class.

**`See`**

Header

#### Defined in

[modules/content.tsx:27](https://github.com/lilykiwi/lilykiwi.xyz/blob/ada3f36/src/modules/content.tsx#L27)

___

### Header

▸ **Header**(`props`): `JSX.Element`

Header component that contains the title of the article

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `Object` | children of the header |
| `props.children` | `any` | - |

#### Returns

`JSX.Element`

Header component

**`Remarks`**

This component is probably unnecessary, all it does is wrap its' contents in a div with the class "header". This is used in Sidebar.SidebarButtons, which specifically looks for a h1 to grab headings for the document. This should be reworked to be more general.

**`See`**

Sidebar.SidebarButtons

#### Defined in

[modules/content.tsx:14](https://github.com/lilykiwi/lilykiwi.xyz/blob/ada3f36/src/modules/content.tsx#L14)

___

### Repositories

▸ **Repositories**(): `JSX.Element`

@todo: document this

#### Returns

`JSX.Element`

#### Defined in

[modules/content.tsx:92](https://github.com/lilykiwi/lilykiwi.xyz/blob/ada3f36/src/modules/content.tsx#L92)

___

### Segment

▸ **Segment**(`props`): `JSX.Element`

@todo: document this

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.category` | `string` |
| `props.children` | `any` |

#### Returns

`JSX.Element`

#### Defined in

[modules/content.tsx:75](https://github.com/lilykiwi/lilykiwi.xyz/blob/ada3f36/src/modules/content.tsx#L75)

___

### TimeFormat

▸ **TimeFormat**(`time`): `string`

@todo: document this

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` |

#### Returns

`string`

#### Defined in

[modules/content.tsx:84](https://github.com/lilykiwi/lilykiwi.xyz/blob/ada3f36/src/modules/content.tsx#L84)

___

### default

▸ **default**(`props`): `JSX.Element`

@todo: document this

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.scrollHook` | `Object` |
| `props.scrollHook.onScroll` | () => `void` |
| `props.scrollHook.value` | `Signal`<`number`\> |

#### Returns

`JSX.Element`

#### Defined in

[modules/content.tsx:171](https://github.com/lilykiwi/lilykiwi.xyz/blob/ada3f36/src/modules/content.tsx#L171)
