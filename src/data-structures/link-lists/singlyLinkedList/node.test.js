import { expect } from 'chai';
import SinglyLinkedListNode from './node.js';

describe('#数据结构专项：链表 -- 单链表node类', () => {
  it('测试添加单一值', () => {
    const linkedList = new SinglyLinkedListNode(1);
    expect(linkedList.value).to.eql(1);
    expect(linkedList.next).to.be.null;
  });

  it('连接两个节点', () => {
    const node1 = new SinglyLinkedListNode(1);
    const node2 = new SinglyLinkedListNode(2, node1);

    expect(node1.next).to.be.null;
    expect(node2.next).to.be.exist;

    expect(node2.value).to.eql(2);
    expect(node2.next.value).to.eql(1);
  });

  it('toString', () => {
    const node = new SinglyLinkedListNode(1);

    expect(node.toString()).to.be.eql('1');

    node.value = 'string value';
    expect(node.toString()).to.be.eql('string value');
  });
});
