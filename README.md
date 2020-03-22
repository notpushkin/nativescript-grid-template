# NativeScript Grid Template

This little helper allows you to use NativeScript [GridLayout][] with CSS [`grid-template-areas`][css] values.

Example usage with [Svelte Native][] (config adapted from <https://www.cssgridplayground.com/>):

```html
<script>
  import gridTemplateAreas from "nativescript-grid-template";
  const areas = gridTemplateAreas(`
    header header header
    sidebar main aside
    sidebar footer footer
  `);
</script>

<gridLayout rows="*, 5*, *" columns="*, 5*, 2*" orientation="vertical">
  <label text="header" {...areas.header} />
  <label text="sidebar" {...areas.sidebar} />
  <label text="main" {...areas.main} />
  <label text="aside" {...areas.aside} />
  <label text="footer" {...areas.footer} />
</gridLayout>
```

This is only tested briefly. For invalid inputs, like this one:

```
a a a
a b b
a b c
```

behaviour is undefined. MRs adding validation are welcome!

[GridLayout]: https://docs.nativescript.org/ui/layouts/layout-containers#gridlayout
[css]: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas
[Svelte Native]: https://svelte-native.technology/
