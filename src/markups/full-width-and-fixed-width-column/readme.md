---
name: 全幅と固定幅を組み合わせたレイアウト
publishDate: 2019-12-03
---

## 説明

固定幅でセンタリングさせつつ、一部のコンテンツは画面いっぱいの幅にしたい場合があります。

そういった際に、これまではネガティブマージンや`vw`単位などを駆使して実装していました。

CSS Gridを使えば、そういったトリッキーなことをせずとも、実現できます。

### 懸念点

このレイアウト方法では、`.Content`直下の子要素がすべてグリッドアイテムになります。そのため、グリッドアイテム同士のマージン・コラプスが起こらなくなります。その点にさえ注意すれば便利に使うことができます。