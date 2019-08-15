# anka-slider

![npm (scoped)](https://img.shields.io/badge/version-1.2.1-blue.svg)
![npm (scoped)](https://img.shields.io/github/license/aslihanozfidan/anka-slider.svg)

An efficient slider component.

## Why should I use it?

It has a iterator algorithm and only shows active slide for your performance.

## Install

```
$ npm install anka-slider
```

## Usage

```javascript
import AnkaSlider from 'anka-slider'

const items = [
      {
        url:
          'https://images.unsplash.com/photo-1561775330-4d22fde8aeed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80',
        alt: 'Image1'
      }
    ];

const settings = {
      animation: true,
      arrows: true
    }

<AnkaSlider
    items={items} 
    settings={settings} />
```