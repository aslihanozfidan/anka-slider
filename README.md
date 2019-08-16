# anka-slider

![npm (scoped)](https://img.shields.io/badge/version-2.0.0-blue.svg)
![npm (scoped)](https://img.shields.io/github/license/aslihanozfidan/anka-slider.svg)

An efficient slider component.

![Screen Shot 2019-08-17 at 01 13 53](https://user-images.githubusercontent.com/18716752/63201174-c1bf3980-c08c-11e9-95a4-244e453c9f94.png)

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
        url: 'path/to/image',
        alt: 'image description'
      }
    ];

const settings = {
      animation: true,
      arrows: true,
      dots: true
    }

<AnkaSlider
    items={items} 
    settings={settings} />
```