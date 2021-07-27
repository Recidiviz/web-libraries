# Changelog

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
