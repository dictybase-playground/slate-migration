import { oldContent, order } from "./data.js";
import fs from "fs";

const FontFamilyList = [
  { name: "Lato" },
  { name: "Merriweather" },
  { name: "Montserrat" },
  { name: "Roboto" },
  { name: "Roboto Condensed" },
  { name: "Roboto Mono" },
  { name: "Roboto Slab" },
];

const FontSizeList = [
  { size: "12px" },
  { size: "14px" },
  { size: "16px" },
  { size: "18px" },
  { size: "20px" },
  { size: "22px" },
  { size: "26px" },
  { size: "30px" },
];

/**
 * type: alignment
 * data: {
 * align: "justify", etc
 * }
 *
 * type: font-color (for marks)
 * data: {
 * color: ""
 * }
 *
 * type: font-family
 * data: {
 * fontFamilyIndex: num
 * }
 *
 * type: font-size
 * data: {
 * fontSizeIndex: num
 * }
 *
 * type: image
 * data: {
 * src,
 * description,
 * height,
 * width
 * }
 *
 * type: line-spacing
 * data: {
 * size
 * }
 *
 * type: link
 * data: {
 * href: url
 * }
 *
 * type: ordered-list
 * type: unordered-list
 * type: list-item
 * type: table-row
 * type: table-cell
 *
 * type: video
 * data: {
 * height,
 * width,
 * url
 * }
 */

/**
 * convertData receives a node object and converts its nested
 * 'data' object into the new Slate format.
 */
const convertData = (node) => {
  const { type } = node;
  switch (type) {
    case "alignment":
      return {
        align: node.data["align"],
      };
    case "font-color":
      return {
        fontColor: node.data["color"],
      };
    case "font-family":
      const familyIndex = node.data["fontFamilyIndex"];
      return {
        fontFamily: FontFamilyList[familyIndex],
      };
    case "font-size":
      const sizeIndex = node.data["fontSizeIndex"];
      return {
        fontFamily: FontSizeList[sizeIndex],
      };
    case "image":
      return {
        url: node.data["src"],
        description: node.data["description"],
        height: node.data["height"],
        width: node.data["width"],
      };
    case "line-spacing":
      return {
        lineSpacing: node.data["size"],
      };
    case "link":
      return {
        href: node.data["url"],
      };
    case "video":
      return {
        url: node.data["url"],
        height: node.data["height"],
        width: node.data["width"],
      };
    default:
      return {};
  }
};

/**
 * convertType converts an existing 'type' property into the 'type'
 * used by the new version of the editor.
 */
const convertType = (type) => {
  let convertedType = "";
  switch (type) {
    case "alignment":
      convertedType = "paragraph";
      break;
    // this needs to be updated to move font color to mark attribute
    case "font-color":
      convertedType = "fontColor";
      break;
    // this needs to be updated to move font family to mark attribute
    case "font-family":
      convertedType = "fontFamily";
      break;
    // this needs to be updated to move font size to mark attribute
    case "font-size":
      convertedType = "fontSize";
      break;
    case "line-spacing":
      convertedType = "lineSpacing";
      break;
    case "ordered-list":
      convertedType = "orderedList";
      break;
    case "unordered-list":
      convertedType = "unorderedList";
      break;
    case "list-item":
      convertedType = "listItem";
      break;
    case "table":
      convertedType = "tableWrap";
      break;
    case "table-row":
      convertedType = "tableRow";
      break;
    case "table-cell":
      convertedType = "tableCell";
      break;
    default:
      convertedType = type;
  }
  return convertedType;
};

const convertChildren = (node) => {
  if (node.nodes) {
    // add logic here...
  }
  return [{ text: "" }];
};

// need to pull data object when converting children

const convertNode = (node) => {
  const { type } = node;
  if (type) {
    // remove any alignment wrappers from old structure;
    // previously, changing the alignment would add a new <div> around the selection
    if (type === "alignment") {
      return {
        ...convertChildren(node)[0],
        ...convertData(node),
      };
    }

    return {
      type: convertType(type),
      children: convertChildren(node),
      ...convertData(node),
    };
  }

  // handle logic for converting leaves to marks here...

  return {
    text,
  };
};

const convertSlate047 = (object, filename) => {
  const { nodes } = object.document;

  fs.writeFileSync(filename, JSON.stringify(nodes.map(convertNode)));
  return nodes.map(convertNode);
};

convertSlate047(oldContent, "content.json");
convertSlate047(order, "order.json");
