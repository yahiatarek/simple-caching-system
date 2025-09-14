const { ListNode, hashMap, DB } = require('./caching-data-structures.js');

let linkedList = new ListNode(null, null, null);

function getUser(userId) {
  if (hashMap.has(`userHashKey${userId}`)) {
    console.log('from cache')
    return hashMap.get(`userHashKey${userId}`).value;
  }

  const found = DB.find(item => item.id === userId);
  if (found) {
    createNodeAtLinkedListHead(found);
    evictNodeFromLinkedListTail();
    return found;
  }

  return 'not found'
}

function createNodeAtLinkedListHead(user) {
  if (linkedList.value === null) {
    linkedList.value = user;
    hashMap.set(`userHashKey${user.id}`, linkedList);
  } else {
    const node = new ListNode(linkedList, null, user);
    linkedList.prev = node;
    linkedList = node;
    hashMap.set(`userHashKey${user.id}`, linkedList);
  }
}

function evictNodeFromLinkedListTail() {
  let p1 = linkedList;
  let count = 0;
  
  while (p1.next !== null) {
    p1 = p1.next;
    count++;
  }

  
  if (count > 3) {
    if(hashMap.has(`userHashKey${p1.value.id}`)) {
      hashMap.delete(`userHashKey${p1.value.id}`);
    }
    p1.prev.next = null;
    p1 = null;
  }

}

module.exports = { getUser };
