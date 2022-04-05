# Changelog

## v3.2.0

### Added

- `iconToDataURI` helper which converts `<Icon/>`s into data URIs for use in background images.

```tsx
iconToDataURI(<Icon kind={IconSVG.Edit} fill={palette.slate} />)
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
