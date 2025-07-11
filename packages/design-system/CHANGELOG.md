# Changelog

## v5.11.0

### Added

- Support for `Tooltip` menu items in the `Dropdown`

## v5.10.0

### Added

- Optional `disableBackgroundScroll` prop to Modal component, true by default

## v5.9.0

### Added

- Moved `styled-components` into peerDependencies
- Removed `react-is` from dependencies (we don't use it in this package)

## v5.8.0

### Added

- `Lightbulb` SVG icon

## v5.7.0

### Added

- `Paper`, `Todo` and `PencilRuler` SVG icons

## v5.6.0

### Added

- `Insights` SVG icon

## v5.5.0

### Added

- Support for `positionX` and `positionY` prop on `TooltipTrigger`

## v5.4.0

### Added

- Support for `contentRef` prop on `Modal`

## v5.3.0

### Added

- `ArrowCircled` SVG icon (#179)

## v5.2.0

### Added

- `Leave` and `Users` SVG icons (#175)
- Customizable background color on `Tooltip` (#176)

## v5.0.0

### Breaking changes

- Drops explicit IE11 support via Element.matches polyfill

## v4.3.1

### Fixed

- Tooltip positioning at the bottom of a page
- Tooltip appearing at the top left corner of the page on load

## v4.3.0

### Added

- Support for showing/hiding/customizing text for the Loading component

## v4.0.0

### Breaking changes

**Typography v2**

- Bundle includes SCSS variables and mixins for typography
- New typography styles and components using Libre Baskerville and Public Sans
- New styles/components replace themed fonts and some older Headings components

## v3.3.2

### Fixed

- `Tooltip` component uses font-family from theme.

## v3.3.1

### Fixed

- Fixes TypeScript error within `ChartWrapper` when adding `children`.

## v3.3.0

### Added

- ChartWrapper accepts and forwards a `ref`.

```tsx
<ChartWrapper className={className} ref={ref}>
  ...
</ChartWrapper>
```

## v3.2.0

### Added

- `iconToDataURI` helper which converts `<Icon/>`s into data URIs for use in background images.

```tsx
iconToDataURI(<Icon kind={IconSVG.Edit} fill={palette.slate} />);
```

## v3.1.0

### Added

- Support for styled-components, max width, and keyboard events in Tooltip and TooltipTrigger (#90)

## v3.0.0

### Added

- `DrawerModal` component (#83)
- `Pill` component (#84)

### Breaking Change

- Deprecated `fonts` object. Introduces the `styled-components` theme. Fonts are now configured inside the theme

```tsx
<ThemeProvider theme={{ fonts: { heading, body, serif, sans } }}>
  ...
</ThemeProvider>
```

## v2.7.0

### Added

- Added a `Tooltip` component (#75)

### Configuration Change

- Updated developer tooling for dependent projects (#74)

### Dependencies

- Various security patches from Dependabot

## v2.6.2

### Configuration Change

- Improved `<Button/>` component typing to allow `type` attribute (#64)

## v2.6.1

### Configuration Change

- Deploy Storybook to Github Pages (#58)
- Add package.json version number to the Storybook brand title (#58)

## v2.6.0

### Added

- Loading component (#51)

## v2.5.2

### Fixed

- Hide inactive TabPanels so they don't interfere with the active one (#50)

## v2.5.1

### Fixed

- Accept all library props for ToastProvider (#49)

## v2.5.0

### Added

- Alert icon (#48)

## v2.4.1

### Added

- Download icon (#47)

## v2.4.0

### Added

- StarCircled icon (#46)

### Fixed

- Keyboard navigation bug in `Dropdown` (#46)

## v2.3.2

### Fixed

- Bug in `Dropdown` where Safari ignored menu item clicks (#43)
- Bug in `Dropdown` where caret was not placed correctly in IE 11 (#44)

## v2.3.1

### Added

- `Gift` icon (#42)

## v2.3.0

### Added

- `DropdownToggle` will render a caret when specified via prop (#39)

### Changed

- `DropdownMenuItem` can render any `children` instead of just a string `label`. (#39)

### Fixed

- `DropdownMenu` now renders text in the house body font. (#39)

### Deprecated

- The `label` prop for `DropdownMenuItem` (#39)

## v2.1.0

### Added

- `IconSVG.AddFilled`, `IconSVG.Circle`, `IconSVG.Return` (#36)

## v2.0.0

### Added

- `<Icon/>`s now default their fill/stroke to `currentColor` (#31)

### Changed

- Users can now attach refs to `<Button/>` components (#32)
- `<Icon/>` fill prop changed to `color` (#31)
- `<ButtonDropdown/>` component now fully aligns with ARIA guidelines (#34)
