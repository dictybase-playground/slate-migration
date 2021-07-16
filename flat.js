/**
 * {
        ...convertChildren(node),
        ...convertData(node),
      }

      with the check inside children
 */
const old = [
  {
    0: {
      type: "body1",
      children: [
        {
          text: "",
          fontFamily: "inherit",
          fontColor: "inherit",
          fontSize: "inherit",
        },
      ],
    },
    1: {
      0: {
        type: "h1",
        children: [
          {
            text: "Techniques",
            fontColor: "inherit",
            fontSize: "inherit",
            fontFamily: "inherit",
          },
        ],
      },
      1: {
        type: "h3",
        children: [
          {
            text: "Media and buffers",
            bold: true,
            fontSize: "22px",
            fontColor: "inherit",
            fontFamily: "22px",
          },
        ],
      },
    },
  },
];

const old2 = [
  {
    type: "div",
    children: [
      {
        type: "h1",
        children: [],
      },
      {
        type: "h1",
        children: [],
      },
    ],
  },
];

const flattenArr = (arr) => {
  let newarr = [];
  arr.forEach((item) => {
    const vals = Object.values(item);
    vals.forEach((val) => {
      if (!val.children) {
        newarr.push(flattenArr([val]));
      } else {
        newarr.push(val);
      }
    });
  });
  return newarr;
};

// const flat = (arr) => {
//   let newarr = flattenArr(arr);
//   const arr2 = newarr.flat();
//   let arr3 = [];
//   arr2.forEach((item) => {
//     if (!item.children) {
//       const vals = Object.values(item);
//       arr3.push(vals);
//     } else {
//       arr3.push(item);
//     }
//   });
//   return arr3.flat();
// };

// const flatReduce = (arr) => {
//   return arr.reduce((acc, val) => {
//     if (!val.children) {
//       const vals = Object.values(val);
//       vals.forEach((item) => {
//         return [...acc, ...item];
//       });
//     } else {
//       return [...acc, ...val];
//     }
//   });
// };

// const format = (arr) => {
//   let newarr = [];
//   arr.forEach((item) => {
//     newarr.push(item.children);
//   });
//   return newarr.flat(1);
// };

// console.log(flat(old));
console.log(flattenArr(old).flat());
// console.log(format(old2));
// console.log(flatReduce(old));
