---
name: subgridを使ったシンプルなフォーム
publishDate: 2019-12-11
---

## subgridについて

[subgrid](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Grid_Layout/Subgrid)は、2019年12月11日現在Firefox 71のみに実装があります。


## 説明

[シンプルなフォーム](../simple-form/)では、`form`要素の直下に、`label`要素と`input`要素を並べていました。

なんらかの事情で、`input`要素を`label要素`で囲むような場合はCSS Gridで列を揃えるのは難しくなります。ですが、[subgrid](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Grid_Layout/Subgrid)を使うことで実現できます。

この例では`subgrid`をサポートしてない場合は、`label`要素を`display: contents;`にして、同じ見た目にしています。ただ、できることならば`display: contents`ではなく`subgrid`を使いたいお気持ちです。