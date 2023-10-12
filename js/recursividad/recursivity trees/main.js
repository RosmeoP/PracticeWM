class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    //Se inicializa el arbol binario como vacio
    constructor() {
        this.root = null;
    }

    //Sirve para verificar si el arbol esta vacio
    isEmptyTree() {
        return this.root === null;
    }

    //Sirve para obtener el valor del nodo raiz
    getRootNode() {
        return this.root;
    }

    //Con este metodo vamos a insertar un nuevo nodo, se usan dos metodos insert e insertNode
    insert(value) {

        const newNode = new Node(value);

        //Si el arbol esta vacio, el primer nodo a insertar se convierte en raiz
        if (this.isEmptyTree()) {
            this.root = newNode;
        }
        else {
            //En caso de que el arbol tenga un valor inicial (minimo un nodo raiz)
            //se hace la insercion de manera recursiva
            this.insertNode(this.root, newNode);
        }
    }

    //Insertamos los nodos en los subarboles izquierdo o derecho
    //segun corresponda
    insertNode(root, newNode) {

        //Si el nodo a insertar es menor que la raiz
        //se desplaza al lado izquierdo
        if (newNode.data < root.data) {

            //Se verifica si no existe un valor al lado izquierdo
            //para poder insertar el nodo
            if (root.left === null) {
                root.left = newNode;
            } else {
                //En caso de que este ocupado con un valor
                //se busca de manera recursiva hasta encontrar el espacio
                //disponible para insertar el nodo
                this.insertNode(root.left, newNode);
            }
        } else if (newNode.data > root.data) {

            //Se verifica si no existe un valor al lado derecho
            //para poder insertar el nodo
            if (root.right === null) {
                root.right = newNode;
            } else {
                //En caso de que este ocupado con un valor
                //se busca de manera recursiva hasta encontrar el espacio
                //disponible para insertar el nodo
                this.insertNode(root.right, newNode);
            }
        }
    }

    //Se busca el nodo mas pequeño del arbol
    minNode(root) {

        if (!root.left) {
            return root.data;
        }
        else {
            return this.minNode(root.left);
        }
    }

    //Se busca el nodo mas grande del arbol
    maxNode(root) {

        if (!root.right) {
            return root.data;
        } else {
            return this.maxNode(root.right);
        }
    }

    //Se usa para buscar un nodo en el arbol
    //si lo encuentra devuelve true
    //en caso contrario devuelve false
    search(root, value) {

        //Verificamos que el arbol no este vacio
        if (!root) {
            return false;
        } else {

            //Buscamos el valor del nodo en el arbol
            //si es menor que la raiz buscamos al lado izquierdo hasta encontrar el nodo
            //si es mayor que la raiz buscamos al lado derecho hasta encontrar el nodo
            //si igual que la raiz devuelve true
            if (root.data === value) {
                return true;
            } else if (value < root.data) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    //Eliminamos el nodo segun el valor que le ingresemos
    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {

        if (root === null) {
            return root;
        }

        if (value < root.data) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.data) {
            root.right = this.deleteNode(root.right, value);
        } else {

            if (!root.left && !root.right) {
                return null;
            }

            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.letf;
            }

            // root.data = this.minNode(root.right);
            // root.right = this.deleteNode(root.right, root.data);

            root.data = this.maxNode(root.left);
            root.left = this.deleteNode(root.left, root.data);
        }

        return root;
    }

    //Se realiza el recorrido en inorder (izquierda, raiz, derecha)
    inorder(root) {

        if (root === null) {
            return;
        }

        if (root) {
            this.inorder(root.left);
            console.log(root.data);
            this.inorder(root.right);
        }
    }

    //Se realiza el recorrido en preorder (raiz, izquierda, derecha)
    preorder(root) {

        if (root === null) {
            return;
        }

        if (root) {
            console.log(root.data);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }

    //Se realiza el recorrido en postorder (izquierda, derecha, raiz)
    postorder(root) {

        if (root === null) {
            return;
        }

        if (root) {
            this.postorder(root.left);
            this.postorder(root.right);
            console.log(root.data);
        }
    }
}

const tree = new BinarySearchTree();

//listado de nodos
//4, 2, 25, 0, 3, 12, 29, 1, 8, 15, 28, 30, 5, 10, 14, 18, 27
tree.insert(4);
tree.insert(2);
tree.insert(25);
tree.insert(0);
tree.insert(3);
tree.insert(12);
tree.insert(29);
tree.insert(1);
tree.insert(8);
tree.insert(15);
tree.insert(28);
tree.insert(30);
tree.insert(5);
tree.insert(10);
tree.insert(14);
tree.insert(18);
tree.insert(27);

const root = tree.getRootNode();

console.log('InOrder')
tree.inorder(root);

console.log('PreOrder')
tree.preorder(root);

console.log('PostOrder')
tree.postorder(root);

console.log(tree.search(root, 2));
console.log(tree.search(root, 150));

tree.delete(4);
console.log(tree);