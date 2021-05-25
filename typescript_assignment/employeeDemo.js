// Crate an Array on JSON object for storing EMployee information as follows
// let arr = [ {EmpNo:101, EmpNAme:'ddd', DeptNae:'IT', Salary:1000}]; // likewise at alease 20 records for different deparments
// - perform following operations on this array
//     - list all employees for specific DeptNAme
//     - Sort Employees arary by EMpNAme, use sort() method
//     - Reverse Employees by Salary, used reverse() method
//     - create seperate arrays for each department, use reduce() method 
var employees = new Array();
employees.push({ EmpNo: 1, EmpName: "Rohit K", Department: "Engineering", Salary: 30000 });
employees.push({ EmpNo: 2, EmpName: "Amit Kumar", Department: "Engineering", Salary: 40000 });
employees.push({ EmpNo: 3, EmpName: "Jonn J", Department: "HR", Salary: 40000 });
employees.push({ EmpNo: 4, EmpName: "Pritam Rao", Department: "HR", Salary: 60000 });
employees.push({ EmpNo: 5, EmpName: "Jack Kallis", Department: "Marketing", Salary: 60000 });
employees.push({ EmpNo: 6, EmpName: "Sachin T", Department: "Marketing", Salary: 80000 });
employees.push({ EmpNo: 7, EmpName: "Virat Kohli", Department: "Marketing", Salary: 90000 });
employees.push({ EmpNo: 8, EmpName: "Summit Kumar", Department: "Finance", Salary: 990000 });
employees.push({ EmpNo: 9, EmpName: "Anant Mishra", Department: "Finance", Salary: 230000 });
employees.push({ EmpNo: 10, EmpName: "Kapil Dev", Department: "Finance", Salary: 450000 });
employees.push({ EmpNo: 11, EmpName: "Rohit Sharma", Department: "Finance", Salary: 330000 });
employees.push({ EmpNo: 12, EmpName: "Kunal Pandya", Department: "HR", Salary: 320000 });
employees.push({ EmpNo: 13, EmpName: "Rohan Pandi", Department: "Marketing", Salary: 30000 });
employees.push({ EmpNo: 14, EmpName: "Mohit Chauhan", Department: "Marketing", Salary: 40000 });
employees.push({ EmpNo: 15, EmpName: "Amit Pandey", Department: "Marketing", Salary: 40000 });
employees.push({ EmpNo: 16, EmpName: "Ritu Kumar", Department: "Engineering", Salary: 530000 });
employees.push({ EmpNo: 17, EmpName: "Jarat Kumar", Department: "Engineering", Salary: 530000 });
employees.push({ EmpNo: 18, EmpName: "Rajat Shulka", Department: "Engineering", Salary: 530000 });
employees.push({ EmpNo: 19, EmpName: "Romil Shulka", Department: "Engineering", Salary: 530000 });
employees.push({ EmpNo: 20, EmpName: "Rahi Kadam", Department: "Engineering", Salary: 530000 });
function getEmployeeNameByDepartment(department) {
    employees.forEach(function (v, i) {
        if (v.Department == department) {
            console.log(v.EmpName);
        }
    });
}
getEmployeeNameByDepartment("HR");
var sortedList = employees.sort(function (a, b) { return a.EmpName.localeCompare(b.EmpName); });
console.log(sortedList);
var reversedRecords = employees.reverse();
var departmentWiseEmployees = employees.reduce(function (r, o) {
    var key = o.Department; // unique key
    if (r[key] || (r[key] = []))
        r[key].push({ Department: key, EmpNo: o.EmpNo, EmpName: o.EmpName, Salary: o.Salary });
    return r;
}, {});
console.log(departmentWiseEmployees);
