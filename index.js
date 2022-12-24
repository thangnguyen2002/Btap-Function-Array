//Bai 1
var styles = ['Jazz', 'Blues']
// styles.push('Rock-n-Roll') //+ Thêm “Rock-n-Roll” vào cuối mảng
// styles.splice(1, 0, 'Classics') //Thay thế giá trị ở giữa bằng “Classics”
// console.log(styles.shift()) //Tách giá trị đầu tiên của mảng và hiển thị nó
// styles.unshift('Rap', 'Reggae') //+ Thêm  "Rap" và '"Reggae" vào đầu mảng
// console.log(styles) 

//Bai 2
var arr = [1,2,3,4,5]
// console.log(arr.join('-')) //biến mảng arr thành chuỗi và ngăn cách giữa các phần tử bằng kí tự "-"
// arr.unshift(99) //thêm 1 phần tử ở đầu mảng
// arr.push(15, 24) //thêm 2 phần tử ở cuối mảng
// arr.splice(3, 2) //xoá 2 phần tử ở cuối mảng -> con` lai [1, 2, 3]
// arr.splice(0, 2) //xoá 2 phần tử ở đầu mảng ->  [3, 4, 5]
// console.log(arr)
var arr2 = [25, 67] //tự tạo một mảng mới và nối  với mảng arr
// console.log(arr.concat(arr2)) 

//Bai3 kiểm tra xem đầu vào có phải là một mảng hay không
var is_array = (input) => {
    if (Array.isArray(input)) {
        return true
    }
    return false
}

const a = is_array('techc')   // false
const b = is_array([1, 2, 4, 0])  //true

// console.log(a) // false
// console.log(b) // true

//Bài 4 : Viết một hàm JavaScript để sao chép một mảng
var array_Clone = (input) => {
    return input
}

const copyArray = array_Clone([1, 2, 4, 0])
// console.log(copyArray) // [1, 2, 4, 0]

//Bài 5: Viết hàm JavaScript để lấy các phần tử đầu tiên của một mảng. Truyền tham số 'n' sẽ trả về 'n' phần tử đầu tiên của mảng
var first = (input, n) => {
    var array = []
    for (let i = 0; i < n; i++) {
        if (n <= input.length) {
            array.push(input[i])
        }
    }
    return array
}

const c = first([1,2,3,4] , 3)
// console.log(c) // [1,2,3]

//Bài 6 : Viết một hàm JavaScript để lấy các phần tử cuối cùng của một mảng. Truyền tham số 'n' sẽ trả về 'n' phần tử cuối cùng của mảng
var last = (input, n) => {
    var array = []
    for (let i = input.length-n; i <= input.length-1; i++) {
        if (n <= input.length) {
            array.push(input[i])
        }
    }
    return array
}
const d = last([1,2,3,4] , 3)
console.log(d) // [2,3,4]