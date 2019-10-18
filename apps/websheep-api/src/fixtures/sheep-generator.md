
Use with https://www.json-generator.com/

```
[
  '{{repeat(20, 20)}}',
  {
    id: '{{objectId()}}',
    age: '{{integer(1, 12)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    gender: '{{gender()}}',
    name: '{{firstName()}}',
    pictureUri: 'http://localhost:3333/assets/sheep-{{index()}}.jpg',
    farmId: function (tags) {
        var farms = ['P4VU2Xsw', 'ks6GN2am', 'wF6aEGTGK'];
        return farms[tags.integer(0, farms.length - 1)];
    },
    destinations: function (tags) {
      var destinations = ['kebab', 'wool'];
      return destinations[tags.integer(0, destinations.length - 1)];
    }
  }
]
```
