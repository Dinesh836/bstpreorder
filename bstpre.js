class Node{
   constructor(data){
       this.data=data;
       this.left=null;
       this.right=null;
   }
}
class BST{
    constructor(){
        this.root=null;
    }
    insert(data){
        let node=new Node(data);
        if(this.root==null){
            this.root=node;
        }else {
            this.inserttNode(this.root , node);
        }
    }
    inserttNode(root , newNode){
        if(newNode.data<root.data){
           if(root.left==null){
                root.left=newNode;
           }else {
              this.inserttNode(root.left , newNode);
           }
        }else if(newNode.data>root.data) {
            if(root.right==null){
                root.right=newNode;
           }else {
              this.inserttNode(root.right , newNode);
           }
        }
    }
    search(root , value){
        if(root.data==value){
            return true ;
        }else if(root.data<value) {
            this.search(root.left , value);
        }else if(root.data>value){
            this.search(root.right , value);
        }else {
            return false;
        }
    }
// preoder by recursion

    preorder(root){
        if(root!=null){
            console.log(root.data);
            return this.preorder(root.left);
            return this.preorder(root.right);
        }
    }
// preoder by iteration
    preorderByIteration(root){
        let st=new Array();
        if(root==null) return ;
        st.push(root);
        while(st.length!=0){
            let curr=st.pop();
            console.log(curr.data);
            if(curr.right!=null) {
                st.push(curr.right);
            }
            if(curr.left!=null) {
                st.push(curr.left);
            }
        }
    }
}
