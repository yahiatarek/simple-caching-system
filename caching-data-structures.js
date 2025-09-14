function ListNode(next, prev, value) {
  this.next = next;
  this.prev = prev;
  this.value = value;
}	

const hashMap = new Map();

const DB = [];
for (let i = 0; i < 10**6; i++) {
  DB.push({
    name: `name${i}`,
    id: i,
    address: `address${i}`
  });
}

module.exports = { ListNode, hashMap, DB };