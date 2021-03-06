import { convertSlate047 } from "../src/convert.js";

const oldContent = {
  object: "value",
  document: {
    object: "document",
    data: {},
    nodes: [
      {
        object: "block",
        type: "paragraph",
        data: {},
        nodes: [
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: "Strains are stored frozen in liquid nitrogen as axenic cultures, cells grown on bacterial lawn, or spores recovered from development on bacterial lawn. Storage is in three separate identical tanks, one of which is located in a different building. Plasmids are stored frozen at -80°C in duplicate freezers as transformed bacteria and often as DNA, stored at -20°C.",
                marks: [],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "paragraph",
        data: {},
        nodes: [
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: "",
                marks: [],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "paragraph",
        data: {},
        nodes: [
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: "The collection is being built by submission of  published strains and plasmids. We encourage and also ",
                marks: [],
              },
              {
                object: "leaf",
                text: "periodically",
                marks: [
                  {
                    object: "mark",
                    type: "italic",
                    data: {},
                  },
                ],
              },
              {
                object: "leaf",
                text: " remind investigators to send new mutants, natural isolates, and plasmids, once they have been published. We do regular quality checks, however, a large component of the quality control program consists of feedback from the recipients of materials. DSC orders are placed through a shopping cart system and are filled in the order they are received.",
                marks: [],
              },
            ],
          },
        ],
      },
    ],
  },
};

const newContent = [
  {
    type: "paragraph",
    children: [
      {
        text: "Strains are stored frozen in liquid nitrogen as axenic cultures, cells grown on bacterial lawn, or spores recovered from development on bacterial lawn. Storage is in three separate identical tanks, one of which is located in a different building. Plasmids are stored frozen at -80°C in duplicate freezers as transformed bacteria and often as DNA, stored at -20°C.",
        fontColor: "inherit",
        fontSize: "inherit",
        fontFamily: "inherit",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "",
        fontColor: "inherit",
        fontSize: "inherit",
        fontFamily: "inherit",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "The collection is being built by submission of  published strains and plasmids. We encourage and also ",
        fontColor: "inherit",
        fontSize: "inherit",
        fontFamily: "inherit",
      },
      {
        text: "periodically",
        italic: true,
        fontColor: "inherit",
        fontSize: "inherit",
        fontFamily: "inherit",
      },
      {
        text: " remind investigators to send new mutants, natural isolates, and plasmids, once they have been published. We do regular quality checks, however, a large component of the quality control program consists of feedback from the recipients of materials. DSC orders are placed through a shopping cart system and are filled in the order they are received.",
        fontColor: "inherit",
        fontSize: "inherit",
        fontFamily: "inherit",
      },
    ],
  },
];

describe("data conversion", () => {
  it("should convert to new slate format", () => {
    const converted = convertSlate047(oldContent);
    expect(converted).toEqual(newContent);
  });
});
