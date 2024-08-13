---
title: Morelia Coffee Shops
description: A google map with coffee shops in Morelia, Michoacán, México.
date: 2018-04-21
draft: false
slug: /other/morelia-coffee-shops
tags:
  - Google Maps
  - CSS
---

[Map Demo](https://arthurvargas.dev/src/views/neighborhood-map-item/map/index.html)

A google map with a list of coffee shops that can be identified on a map of Morelia, Michoacan, Mexico.

## CSS

```css
.grid__item {
  &:hover,
  &:focus-within {
    background-color: #eee;
  }

  a {
    position: relative;
    z-index: 1;
  }

  h2 {
    a {
      position: static;

      &:hover,
      &:focus {
        color: blue;
      }

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: background-color 0.1s ease-out;
        background-color: transparent;
      }
    }
  }
}
```
