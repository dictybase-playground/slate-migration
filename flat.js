import fs from "fs";
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

const example = [
  {
    0: {
      type: "unorderedList",
      children: [
        {
          67: {
            type: "unorderedList",
            children: [
              {
                type: "listItem",
                children: [
                  {
                    type: "listItem",
                    children: [
                      {
                        0: {
                          type: "paragraph",
                          children: [
                            {
                              text: "8.0 g KH2PO4",
                              fontColor: "inherit",
                              fontSize: "inherit",
                              fontFamily: "inherit",
                            },
                          ],
                        },
                      },
                    ],
                  },
                ],
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "listItem",
                    children: [
                      {
                        0: {
                          type: "paragraph",
                          children: [
                            {
                              text: "1.16 g Na2HPO4 (or 2.2 g Na2HPO4.7H2O)",
                              fontColor: "inherit",
                              fontSize: "inherit",
                              fontFamily: "inherit",
                            },
                          ],
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  },
];

// process:
// 1. if the current object does not have a type property then it is invalid
// 2. need to get the values of that object
// 3. before pushing value to array, run a check on the children

const flatten = (array) =>
  array.reduce((acc, val) => {
    if (val.type === undefined) {
      // if there is a text property then it is a text node and can be added
      if (val.text !== undefined) {
        acc.push(val);
      } else {
        const vals = Object.values(val);
        acc.push(...flatten(vals));
      }
    } else {
      acc.push({ ...val, children: flatten(val.children) });
    }
    return acc;
  }, []);

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
// console.log(flatten(example));
// fs.writeFileSync("converted.json", JSON.stringify(flatten(convertedMedia)));
fs.writeFileSync("example.json", JSON.stringify(flatten(example)));
// console.log(format(old2));
// console.log(flatReduce(old));
