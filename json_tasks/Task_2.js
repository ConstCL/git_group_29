

const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 6,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    }
    ,
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        }
      ]
    }
  ]

  
  let workers = function(){                           //функция автоматического посчета и вывода на экран
    for (let i = 0; i < enterprises.length; i++) {
        let ent_name = enterprises[i].name;
        let sum_emp1 = 0;
        for (let c = 0; c < enterprises[i].departments.length; c++) {
            sum_emp1 += enterprises[i].departments[c].employees_count;

        }
        console.log(`${ent_name} \(${sum_emp1} сотрудников\)`);


        for (let d = 0; d < enterprises[i].departments.length; d++) {
            let test_dep = enterprises[i].departments[d].name;
            let emp_count = enterprises[i].departments[d].employees_count;
            console.log(`${test_dep} \(${emp_count} сотрудников\)`);
        }
    }
}

workers(); 

