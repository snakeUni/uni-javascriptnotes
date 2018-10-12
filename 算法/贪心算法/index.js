/**
 * 贪心算法的一个经典案例是找零问题。你从商店购买了一些商品，找零 63 美分，
 * 店员要 怎样给你这些零钱呢?如果店员根据贪心算法来找零的话，他会给你两个 25 美分、一个 10 美分和三个 1 美分。在没有使用 50 美分的情况下这是最少的硬币数量
 */

//  部分背包问题。
// (1) 背包的容量为 W，物品的价格为 v，重量为 w。 (2) 根据 v/w 的比率对物品排序。
// (3) 按比率的降序方式来考虑物品。
// (4) 尽可能多地放入每个物品。

function ksack(values, weights, capacity) {
  var load = 0;
  var i   = 0;
  var w   = 0;
  while (load < capacity && i < 4) {
     if (weights[i] <= (capacity-load)) {
        w += values[i];
        load += weights[i];
     }
     else {
        var r = (capacity-load)/weights[i];
        w += r * values[i];
        load += weights[i];
      } 
      ++i;
  }
  return w; 
}
var items = ["A", "B", "C", "D"];
var values = [50, 140, 60, 60];
var weights = [5, 20, 10, 12];
var capacity = 30;
// console.log(ksack(values, weights, capacity)) =>220