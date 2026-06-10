# LOE Menu Toggle with Outside Click Detection

A lightweight jQuery solution for creating dropdown menus that:

* Toggle on button click
* Close when clicking outside the menu
* Stay open when interacting inside the menu
* Prevent animation queue issues
* Support smooth slide animations

---

## Features

✔ Clean jQuery implementation

✔ Outside click detection

✔ Prevents event bubbling issues

✔ Smooth slide animations

✔ Optimized selector caching

✔ Easy integration with WordPress themes and plugins

---

## HTML Structure

```html
<button id="loe-menu">
    Menu
</button>

<div id="loe-menu-list" style="display:none;">
    <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
    </ul>
</div>
```

---

## jQuery Code

```javascript
jQuery(function ($) {

    const $menuButton = $('#loe-menu');
    const $menuList   = $('#loe-menu-list');

    $menuButton.on('click', function (e) {
        e.stopPropagation();
        $menuList.stop(true, true).slideToggle(200);
    });

    $menuList.on('click', function (e) {
        e.stopPropagation();
    });

    $(document).on('click', function (e) {

        if (!$(e.target).closest('#loe-menu, #loe-menu-list').length) {
            $menuList.stop(true, true).slideUp(200);
        }

    });

});
```

---

## How It Works

### Open Menu

When the user clicks:

```html
#loe-menu
```

the menu:

```html
#loe-menu-list
```

is toggled using:

```javascript
slideToggle()
```

---

### Prevent Event Bubbling

```javascript
e.stopPropagation();
```

prevents the click event from reaching:

```javascript
$(document)
```

which would immediately close the menu.

---

### Outside Click Detection

The following code checks whether the clicked element exists inside the menu or menu button:

```javascript
$(e.target).closest('#loe-menu, #loe-menu-list').length
```

If no matching parent exists:

```javascript
$('#loe-menu-list').slideUp();
```

is executed.

---

## Why Use .closest()

Using:

```javascript
.closest()
```

is more reliable than:

```javascript
.is()
```

because it properly handles:

* Nested elements
* Icons
* SVG elements
* Dynamic menu content

---

## WordPress Usage

Ideal for:

* Admin dropdown menus
* User profile menus
* Mobile navigation menus
* Dashboard actions
* Plugin settings pages

---

## Requirements

* jQuery 1.7+
* WordPress (optional)

---

## Author

Gulshan Chauhan

Portfolio:
https://portfolio.perfectprofessionist.com/

GitHub:
https://github.com/gulshanbasouli

---

## License

MIT License
