const newContent =
  '{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"The","marks":[]},{"object":"leaf","text":" ","marks":[{"object":"mark","type":"bold","data":{}}]},{"object":"leaf","text":"Dicty Stock Center","marks":[]},{"object":"leaf","text":" ","marks":[{"object":"mark","type":"bold","data":{}}]},{"object":"leaf","text":"is a rapidly growing central repository for ","marks":[]},{"object":"leaf","text":"Dictyostelium discoideum","marks":[{"object":"mark","type":"italic","data":{}}]},{"object":"leaf","text":" strains and those of related species, plasmids, commonly used food bacteria, and other materials such as antibodies.  The ","marks":[]},{"object":"leaf","text":"DSC","marks":[{"object":"mark","type":"italic","data":{}}]},{"object":"leaf","text":" opened at Columbia University in New York City in the fall of 2002. In 2009 the ","marks":[]},{"object":"leaf","text":"DSC","marks":[{"object":"mark","type":"italic","data":{}}]},{"object":"leaf","text":" moved to its current location at Northwestern University in Chicago, IL, USA. The DSC is supported by NIH/NIGMS. Since 2015, DSC","marks":[]},{"object":"leaf","text":" ","marks":[{"object":"mark","type":"italic","data":{}}]},{"object":"leaf","text":"materials incur a small fee.","marks":[]}]}]}]}}'

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
}

const order = {
  object: "value",
  document: {
    object: "document",
    data: {},
    nodes: [
      {
        object: "block",
        type: "alignment",
        data: {
          align: "center",
        },
        nodes: [
          {
            object: "block",
            type: "h1",
            data: {},
            nodes: [
              {
                object: "text",
                leaves: [
                  {
                    object: "leaf",
                    text: "Ordering Information",
                    marks: [],
                  },
                ],
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
                marks: [
                  {
                    object: "mark",
                    type: "bold",
                    data: {},
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "h2",
        data: {},
        nodes: [
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: "Dicty Stock Center Distribution Policy",
                marks: [
                  {
                    object: "mark",
                    type: "bold",
                    data: {},
                  },
                ],
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
                text: "The ",
                marks: [],
              },
              {
                object: "leaf",
                text: "DSC",
                marks: [
                  {
                    object: "mark",
                    type: "bold",
                    data: {},
                  },
                ],
              },
              {
                object: "leaf",
                text: " fills any request from bona fide teaching or ",
                marks: [],
              },
              {
                object: "leaf",
                text: "non-profit",
                marks: [
                  {
                    object: "mark",
                    type: "bold",
                    data: {},
                  },
                ],
              },
              {
                object: "leaf",
                text: " research institutions. Users from ",
                marks: [],
              },
              {
                object: "leaf",
                text: "for-profit",
                marks: [
                  {
                    object: "mark",
                    type: "bold",
                    data: {},
                  },
                ],
              },
              {
                object: "leaf",
                text: " institutions need to send an ",
                marks: [],
              },
            ],
          },
          {
            object: "inline",
            type: "link",
            data: {
              href: "mailto:dictystocks@northwestern.edu",
            },
            nodes: [
              {
                object: "text",
                leaves: [
                  {
                    object: "leaf",
                    text: "email",
                    marks: [],
                  },
                ],
              },
            ],
          },
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: " stating that the materials will be used for research only and no profit will be made from DSC materials.\n\nWe also expect the recipient to provide a FedEx, UPS, or a DHL billing number to pay for the shipping. If you create your own shipping label, please click that option. Shipping costs are third party and not related to ",
                marks: [],
              },
            ],
          },
          {
            object: "inline",
            type: "link",
            data: {
              href: "/stockcenter/information/payment",
            },
            nodes: [
              {
                object: "text",
                leaves: [
                  {
                    object: "leaf",
                    text: "DSC charges",
                    marks: [
                      {
                        object: "mark",
                        type: "bold",
                        data: {},
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: ".\n\nThe Dicty Stock Center ships strains by default on an ",
                marks: [],
              },
            ],
          },
          {
            object: "inline",
            type: "link",
            data: {
              href: "/techniques/media/media.html#LPB",
            },
            nodes: [
              {
                object: "text",
                leaves: [
                  {
                    object: "leaf",
                    text: "LPB plate",
                    marks: [],
                  },
                ],
              },
            ],
          },
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: " with ",
                marks: [],
              },
            ],
          },
          {
            object: "inline",
            type: "link",
            data: {
              href: "http://dictybase.org/db/cgi-bin/dictyBase/phenotype/strain_and_phenotype_details.pl?genotype_id=6955",
            },
            nodes: [
              {
                object: "text",
                leaves: [
                  {
                    object: "leaf",
                    text: "E. coli B/r a",
                    marks: [],
                  },
                ],
              },
            ],
          },
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: "s a food source.  If axenic cells in ",
                marks: [],
              },
            ],
          },
          {
            object: "inline",
            type: "link",
            data: {
              href: "/techniques/media/media.html#MAHL5",
            },
            nodes: [
              {
                object: "text",
                leaves: [
                  {
                    object: "leaf",
                    text: "HL5",
                    marks: [],
                  },
                ],
              },
            ],
          },
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: " are desired, please add this information in your order.",
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
                text: "Timeline",
                marks: [
                  {
                    object: "mark",
                    type: "bold",
                    data: {},
                  },
                ],
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
                text: "Strains",
                marks: [
                  {
                    object: "mark",
                    type: "font-family",
                    data: {
                      fontFamilyIndex: 4,
                    },
                  },
                ],
              },
              {
                object: "leaf",
                text: " are plated in the order they come in as DSC orders. Depending on the order volume orders are shipped witthin a week or two, when the order is regular and small. However, if you have a small order, please remark in the comment field that you need the order as soon as possible and small orders  are preferentially plated. ",
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
                text: "Due to an increased order volume, we ship larger orders and GWDI orders in 2 to 4 weeks, depending on order volume. We try to bundle orders into one shipment, however, very large orders (>12) might be shipped in separate shipments. Please inquire about shipping and order returns. ",
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
                text: "Plasmids",
                marks: [
                  {
                    object: "mark",
                    type: "bold",
                    data: {},
                  },
                ],
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
                text: "Plasmids will be sent as bacterial transformants on an LB (Luria Bertani) Ampicillin plate, or as DNA on a piece of filter paper by request.",
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
                text: "Note:",
                marks: [
                  {
                    object: "mark",
                    type: "bold",
                    data: {},
                  },
                ],
              },
              {
                object: "leaf",
                text: " When you receive the strain(s) they need to be stored in the lab following one of the ",
                marks: [],
              },
            ],
          },
          {
            object: "inline",
            type: "link",
            data: {
              href: "/techniques/media/dicty_storage.html",
            },
            nodes: [
              {
                object: "text",
                leaves: [
                  {
                    object: "leaf",
                    text: "procedures",
                    marks: [],
                  },
                ],
              },
            ],
          },
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: " described. New users may also consult our ",
                marks: [],
              },
            ],
          },
          {
            object: "inline",
            type: "link",
            data: {
              href: "/stockcenter/information/faq",
            },
            nodes: [
              {
                object: "text",
                leaves: [
                  {
                    object: "leaf",
                    text: "DSC FAQ",
                    marks: [
                      {
                        object: "mark",
                        type: "bold",
                        data: {},
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: " page. Also store your plasmids following standard procedures.",
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
        type: "h4",
        data: {},
        nodes: [
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: "Ordering Procedures for Strains or Plasmids:",
                marks: [],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "body1",
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
                text: "Step 1: To find the item(s) you want, search the strain or plasmid catalog.",
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
                text: "Step 2:  Click the green shopping cart of the available item you wish to purchase. For more details click on the strain.",
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
                text: "Step 3: Go to your shopping cart, inspect the items and check out.",
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
                text: "Step 4: Fill out the form or login to autofill your information.",
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
                text: "Step 5: Complete the payment information as well and click 'Order'",
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
                text: "Step 6: An order confirmation will be sent by email and appears on your screen",
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
                text: "If you need additional assistance, please e-mail the ",
                marks: [],
              },
            ],
          },
          {
            object: "inline",
            type: "link",
            data: {
              href: "mailto:dictystocks@northwestern.edu",
            },
            nodes: [
              {
                object: "text",
                leaves: [
                  {
                    object: "leaf",
                    text: "Dicty Stock Center",
                    marks: [],
                  },
                ],
              },
            ],
          },
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: ".",
                marks: [],
              },
            ],
          },
        ],
      },
    ],
  },
}

export { newContent, oldContent, order }
