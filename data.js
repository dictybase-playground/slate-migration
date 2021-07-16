const newContent =
  '{"object":"value","document":{"object":"document","data":{},"nodes":[{"object":"block","type":"paragraph","data":{},"nodes":[{"object":"text","leaves":[{"object":"leaf","text":"The","marks":[]},{"object":"leaf","text":" ","marks":[{"object":"mark","type":"bold","data":{}}]},{"object":"leaf","text":"Dicty Stock Center","marks":[]},{"object":"leaf","text":" ","marks":[{"object":"mark","type":"bold","data":{}}]},{"object":"leaf","text":"is a rapidly growing central repository for ","marks":[]},{"object":"leaf","text":"Dictyostelium discoideum","marks":[{"object":"mark","type":"italic","data":{}}]},{"object":"leaf","text":" strains and those of related species, plasmids, commonly used food bacteria, and other materials such as antibodies.  The ","marks":[]},{"object":"leaf","text":"DSC","marks":[{"object":"mark","type":"italic","data":{}}]},{"object":"leaf","text":" opened at Columbia University in New York City in the fall of 2002. In 2009 the ","marks":[]},{"object":"leaf","text":"DSC","marks":[{"object":"mark","type":"italic","data":{}}]},{"object":"leaf","text":" moved to its current location at Northwestern University in Chicago, IL, USA. The DSC is supported by NIH/NIGMS. Since 2015, DSC","marks":[]},{"object":"leaf","text":" ","marks":[{"object":"mark","type":"italic","data":{}}]},{"object":"leaf","text":"materials incur a small fee.","marks":[]}]}]}]}}';

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
};

const art = {
  object: "value",
  document: {
    object: "document",
    data: {},
    nodes: [
      {
        object: "block",
        type: "align_center",
        data: {},
        nodes: [
          {
            object: "block",
            type: "alignment",
            data: {
              align: "left",
            },
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
                        text: "",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "align_center",
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
                        data: {
                          className: null,
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "dicty Art",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 6,
                                    },
                                  },
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
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "align_center",
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
                        type: "heading-four",
                        data: {
                          className: null,
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Art inspired by amoebas",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "italic",
                                    data: {},
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "divider",
                data: {
                  className: null,
                },
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
                        text: "      ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "align_center",
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
                        type: "h2",
                        data: {
                          className: null,
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: " ",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 4,
                                    },
                                  },
                                ],
                              },
                              {
                                object: "leaf",
                                text: "Homo amoeba",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "italic",
                                    data: {},
                                  },
                                  {
                                    object: "mark",
                                    type: "bold",
                                    data: {},
                                  },
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 4,
                                    },
                                  },
                                ],
                              },
                              {
                                object: "leaf",
                                text: " ",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 4,
                                    },
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "block",
                        type: "heading-four",
                        data: {
                          className: null,
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "by Artúr van Balen",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "italic",
                                    data: {},
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "alignment",
                    data: {
                      align: "left",
                    },
                    nodes: [
                      {
                        object: "block",
                        type: "heading-four",
                        data: {
                          className: null,
                        },
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
                                    type: "italic",
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
                        type: "table",
                        data: {},
                        nodes: [
                          {
                            object: "block",
                            type: "table-row",
                            data: {},
                            nodes: [
                              {
                                object: "block",
                                type: "table-cell",
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
                                            text: "",
                                            marks: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    object: "block",
                                    type: "video",
                                    data: {
                                      src: "https://www.youtube.com/embed/7jd0QEe_WHE",
                                      height: "300",
                                      width: "600",
                                    },
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
                                    type: "\n",
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
                                ],
                              },
                              {
                                object: "block",
                                type: "table-cell",
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
                                            text: "Project ",
                                            marks: [],
                                          },
                                          {
                                            object: "leaf",
                                            text: "Homo amoeba",
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
                                            text: " investigates the ideal of flexibility. One is\n flexible when one can adapt to all situations. For humans, this is more\n an ideal than reality. For amoebas, being elastic and flexible is no \nexception. Dictyostelium serves here as a representation of the ideal. A\n man attempts to imitate the movement.",
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
                                    type: "align_center",
                                    data: {},
                                    nodes: [
                                      {
                                        object: "block",
                                        type: "alignment",
                                        data: {
                                          align: "left",
                                        },
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
                                                    text: " ",
                                                    marks: [],
                                                  },
                                                  {
                                                    object: "leaf",
                                                    text: "Artúr van Balen, 2008",
                                                    marks: [
                                                      {
                                                        object: "mark",
                                                        type: "italic",
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
                                                    text: "",
                                                    marks: [
                                                      {
                                                        object: "mark",
                                                        type: "italic",
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
                                                    text: "",
                                                    marks: [
                                                      {
                                                        object: "mark",
                                                        type: "italic",
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
                                                    text: "",
                                                    marks: [
                                                      {
                                                        object: "mark",
                                                        type: "italic",
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
                                                    text: "This video has first been presented at the Dicty 2007 meeting in Rotenburg, Germany, which  Artúr visited.",
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
                                                    marks: [
                                                      {
                                                        object: "mark",
                                                        type: "italic",
                                                        data: {},
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
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
                                    type: "font-color",
                                    data: {
                                      color: "#ffffff",
                                    },
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "block",
                        type: "align_center",
                        data: {},
                        nodes: [
                          {
                            object: "block",
                            type: "alignment",
                            data: {
                              align: "left",
                            },
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
                                        text: ". ",
                                        marks: [],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "align_center",
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
                        type: "h2",
                        data: {
                          className: null,
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: " ",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 4,
                                    },
                                  },
                                ],
                              },
                              {
                                object: "leaf",
                                text: "Poem",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "bold",
                                    data: {},
                                  },
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 4,
                                    },
                                  },
                                ],
                              },
                              {
                                object: "leaf",
                                text: " ",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 4,
                                    },
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "block",
                        type: "heading-four",
                        data: {
                          className: null,
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "by Paul R. Fisher ",
                                marks: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "block",
                        type: "heading-six",
                        data: {
                          className: null,
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "ca. 2000",
                                marks: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "block",
                        type: "line-spacing",
                        data: {
                          size: "1.0",
                        },
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
                                    text: "       ",
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
                        type: "heading-three",
                        data: {
                          className: null,
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: " ",
                                marks: [],
                              },
                              {
                                object: "leaf",
                                text: "The Leaders ",
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
                        type: "line-spacing",
                        data: {
                          size: "1.0",
                        },
                        nodes: [
                          {
                            object: "block",
                            type: "heading-three",
                            data: {
                              className: null,
                            },
                            nodes: [
                              {
                                object: "text",
                                leaves: [
                                  {
                                    object: "leaf",
                                    text: " ",
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
                        type: "heading-four",
                        data: {
                          className: null,
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: " ",
                                marks: [],
                              },
                              {
                                object: "leaf",
                                text: "From the beginning of the journey,\n it is we who lead the way,\n we call the tune\n we beat the drum\n we send our chemical messages\n and you.... you must obey.\n \n But at the journey's end,\n at the culmination of it all,\n we are the stalk and the stem\n who raise you up to the sky\n so that you might live\n while we.... we must die.",
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
                                text: " ",
                                marks: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "block",
                        type: "heading-four",
                        data: {
                          className: null,
                        },
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
                        type: "divider",
                        data: {
                          className: null,
                        },
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
                    ],
                  },
                  {
                    object: "block",
                    type: "alignment",
                    data: {
                      align: "left",
                    },
                    nodes: [
                      {
                        object: "block",
                        type: "heading-four",
                        data: {
                          className: null,
                        },
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
                    ],
                  },
                  {
                    object: "block",
                    type: "alignment",
                    data: {
                      align: "center",
                    },
                    nodes: [
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
                                text: "Dicty Artwork by Paul H. Dear, 2005",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 4,
                                    },
                                  },
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
                    ],
                  },
                  {
                    object: "block",
                    type: "alignment",
                    data: {
                      align: "center",
                    },
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
                                text: "Graphics generated when the Nature cover was created for the publication of the ",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 1,
                                    },
                                  },
                                ],
                              },
                              {
                                object: "leaf",
                                text: "Dictyostelium ",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "italic",
                                    data: {},
                                  },
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 1,
                                    },
                                  },
                                ],
                              },
                              {
                                object: "leaf",
                                text: "Genome (Nature, 5th May 2005).",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 1,
                                    },
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "table",
                    data: {},
                    nodes: [
                      {
                        object: "block",
                        type: "table-row",
                        data: {},
                        nodes: [
                          {
                            object: "block",
                            type: "table-cell",
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
                                    type: "image",
                                    data: {
                                      src: "https://user-images.githubusercontent.com/1349602/104525522-f9a21780-55c5-11eb-966a-b502f575e155.jpg",
                                      description: "",
                                      height: "",
                                      width: "",
                                    },
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
                                ],
                              },
                            ],
                          },
                          {
                            object: "block",
                            type: "table-cell",
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
                                    type: "image",
                                    data: {
                                      src: "https://user-images.githubusercontent.com/1349602/104525578-10486e80-55c6-11eb-8177-38d32fbea9cc.jpg",
                                      description: "",
                                      height: "",
                                      width: "",
                                    },
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
                                ],
                              },
                            ],
                          },
                          {
                            object: "block",
                            type: "table-cell",
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
                                    type: "image",
                                    data: {
                                      src: "https://user-images.githubusercontent.com/1349602/104525539-0161bc00-55c6-11eb-98aa-8a0a749252ac.jpg",
                                    },
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
                                ],
                              },
                            ],
                          },
                          {
                            object: "block",
                            type: "table-cell",
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
                                    type: "image",
                                    data: {
                                      src: "https://user-images.githubusercontent.com/1349602/104525544-06267000-55c6-11eb-8f77-75a78d0df783.jpg",
                                      description: "",
                                      height: "",
                                      width: "",
                                    },
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
                                ],
                              },
                            ],
                          },
                          {
                            object: "block",
                            type: "table-cell",
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
                                    type: "image",
                                    data: {
                                      src: "https://user-images.githubusercontent.com/1349602/104525618-1fc7b780-55c6-11eb-8cbf-592f652e392c.jpg",
                                    },
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
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "alignment",
                    data: {
                      align: "center",
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "     ",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 1,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: "Download High Resolution Images",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 1,
                                },
                              },
                              {
                                object: "mark",
                                type: "underline",
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
                    type: "alignment",
                    data: {
                      align: "left",
                    },
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
                                text: "                   ",
                                marks: [],
                              },
                              {
                                object: "leaf",
                                text: " ",
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
                          {
                            object: "inline",
                            type: "link",
                            data: {
                              href: "https://github.com/dictyBase/migration-data/files/5811583/crowd.pdf",
                            },
                            nodes: [
                              {
                                object: "text",
                                leaves: [
                                  {
                                    object: "leaf",
                                    text: "Crowd",
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
                                text: "                                    ",
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
                          {
                            object: "inline",
                            type: "link",
                            data: {
                              href: "https://github.com/dictyBase/migration-data/files/5811582/crowd-helix.pdf",
                            },
                            nodes: [
                              {
                                object: "text",
                                leaves: [
                                  {
                                    object: "leaf",
                                    text: "Crowd Helix",
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
                                text: "                              ",
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
                          {
                            object: "inline",
                            type: "link",
                            data: {
                              href: "https://github.com/dictyBase/migration-data/files/5811586/metal-crowd.pdf",
                            },
                            nodes: [
                              {
                                object: "text",
                                leaves: [
                                  {
                                    object: "leaf",
                                    text: "Metal Crowd",
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
                                text: "                            ",
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
                          {
                            object: "inline",
                            type: "link",
                            data: {
                              href: "https://github.com/dictyBase/migration-data/files/5811587/metal-helix.pdf",
                            },
                            nodes: [
                              {
                                object: "text",
                                leaves: [
                                  {
                                    object: "leaf",
                                    text: "Metal Helix",
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
                                text: "                                 ",
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
                          {
                            object: "inline",
                            type: "link",
                            data: {
                              href: "https://github.com/dictyBase/migration-data/files/5811584/forest.pdf",
                            },
                            nodes: [
                              {
                                object: "text",
                                leaves: [
                                  {
                                    object: "leaf",
                                    text: "Forest",
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
                        type: "paragraph",
                        data: {},
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: 'Permission is hereby granted by the copyright holder to use these images for any non-commercial use, including inclusion in web pages, presentations, and reports. The images should have a minimal attribution of "Copyright, Paul H. Dear, MRC Laboratory of Molecular Biology, Cambridge, UK"',
                                marks: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "divider",
                data: {
                  className: null,
                },
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
                        text: "     ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "alignment",
                data: {
                  align: "center",
                },
                nodes: [
                  {
                    object: "block",
                    type: "align_center",
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
                            type: "align_center",
                            data: {},
                            nodes: [
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
                                        text: " National Geographic ",
                                        marks: [
                                          {
                                            object: "mark",
                                            type: "bold",
                                            data: {},
                                          },
                                          {
                                            object: "mark",
                                            type: "font-size",
                                            data: {
                                              fontSizeIndex: 4,
                                            },
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
                                        text: "Best Microscopic Images Competion ",
                                        marks: [
                                          {
                                            object: "mark",
                                            type: "italic",
                                            data: {},
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "block",
                        type: "heading_1",
                        data: {
                          className: null,
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Matthew Springer",
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
                    type: "align_center",
                    data: {},
                    nodes: [
                      {
                        object: "block",
                        type: "heading-six",
                        data: {
                          className: null,
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Stanford University ",
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
                                text: " ",
                                marks: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "block",
                        type: "heading-four",
                        data: {
                          className: null,
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "4th place (2008)",
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
                        type: "heading-four",
                        data: {
                          className: null,
                        },
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
                        type: "image",
                        data: {
                          src: "https://user-images.githubusercontent.com/13489381/58503903-25e9f580-814f-11e9-80fb-6988e2301c96.jpg",
                        },
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
                        type: "heading-four",
                        data: {
                          className: null,
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "    ",
                                marks: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "divider",
                data: {
                  className: null,
                },
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
                type: "hr",
                data: {
                  className: null,
                },
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
                type: "align_center",
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
                        type: "paragraph",
                        data: {},
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Altruistic Amoeba",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 4,
                                    },
                                  },
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
                        type: "line-spacing",
                        data: {
                          size: "1.1",
                        },
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
                    ],
                  },
                  {
                    object: "block",
                    type: "alignment",
                    data: {
                      align: "center",
                    },
                    nodes: [
                      {
                        object: "block",
                        type: "table",
                        data: {},
                        nodes: [
                          {
                            object: "block",
                            type: "table-row",
                            data: {},
                            nodes: [
                              {
                                object: "block",
                                type: "table-cell",
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
                                            text: "",
                                            marks: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                  {
                                    object: "block",
                                    type: "video",
                                    data: {
                                      src: "https://www.youtube.com/embed/zMWSjF_lKGQ",
                                      height: "300",
                                      width: "600",
                                    },
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
                                    type: "\n",
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
                                ],
                              },
                              {
                                object: "block",
                                type: "table-cell",
                                data: {},
                                nodes: [
                                  {
                                    object: "block",
                                    type: "alignment",
                                    data: {
                                      align: "left",
                                    },
                                    nodes: [
                                      {
                                        object: "block",
                                        type: "align_center",
                                        data: {},
                                        nodes: [
                                          {
                                            object: "block",
                                            type: "alignment",
                                            data: {
                                              align: "left",
                                            },
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
                                                        text: "Project ",
                                                        marks: [],
                                                      },
                                                      {
                                                        object: "leaf",
                                                        text: "We're Not So Different",
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
                                                        text: '- "Altruistic Amoeba"\n',
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
                                                        text: "Kurtis Ross, 2014",
                                                        marks: [
                                                          {
                                                            object: "mark",
                                                            type: "italic",
                                                            data: {},
                                                          },
                                                        ],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
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
                    type: "alignment",
                    data: {
                      align: "left",
                    },
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
                                text: "",
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
                    type: "alignment",
                    data: {
                      align: "left",
                    },
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
                                text: "",
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
                    type: "alignment",
                    data: {
                      align: "center",
                    },
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
                                text: "",
                                marks: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

const techniques = {
  object: "value",
  document: {
    object: "document",
    data: {},
    nodes: [
      {
        object: "block",
        type: "align_center",
        data: {},
        nodes: [
          {
            object: "block",
            type: "alignment",
            data: {
              align: "left",
            },
            nodes: [
              {
                object: "block",
                type: "body1",
                data: {
                  className: null,
                },
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
                            type: "font-family",
                            data: {
                              fontFamilyIndex: 2,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "align_center",
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
                        data: {
                          className: null,
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Techniques",
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
                    type: "heading_3",
                    data: {
                      className: null,
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "Media and buffers",
                            marks: [
                              {
                                object: "mark",
                                type: "bold",
                                data: {},
                              },
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 5,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "heading_3",
                    data: {
                      className: null,
                    },
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
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 5,
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "/research/techniques/media",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Media and buffers ",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 2,
                                    },
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
                            text: "",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "heading_3",
                    data: {
                      className: null,
                    },
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
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "/research/techniques/fm-medium",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Recipe for FM defined medium",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 2,
                                    },
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
                            text: " ",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: "(contributed by Jakob Franke)",
                            marks: [
                              {
                                object: "mark",
                                type: "italic",
                                data: {},
                              },
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: " ",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "heading_3",
                    data: {
                      className: null,
                    },
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
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "/research/techniques/low-flo-medium",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Recipe for low fluorescence axenic medium",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 2,
                                    },
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
                            text: " ",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: "(contributed by Harry MacWilliams)",
                            marks: [
                              {
                                object: "mark",
                                type: "italic",
                                data: {},
                              },
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: " ",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "heading_3",
                    data: {
                      className: null,
                    },
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
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "https://github.com/dictyBase/migration-data/files/3220576/synthetic_medium.pdf",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Recipe for synthetic medium",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 2,
                                    },
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
                            text: " (pdf) ",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: "(contributed by Erwin Flaschel)",
                            marks: [
                              {
                                object: "mark",
                                type: "italic",
                                data: {},
                              },
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "heading_3",
                    data: {
                      className: null,
                    },
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
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 5,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "heading_3",
                    data: {
                      className: null,
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "Growth, development, and storage of ",
                            marks: [
                              {
                                object: "mark",
                                type: "bold",
                                data: {},
                              },
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 5,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: "Dictyostelium",
                            marks: [
                              {
                                object: "mark",
                                type: "italic",
                                data: {},
                              },
                              {
                                object: "mark",
                                type: "bold",
                                data: {},
                              },
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 5,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "heading_3",
                    data: {
                      className: null,
                    },
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
                                type: "italic",
                                data: {},
                              },
                              {
                                object: "mark",
                                type: "bold",
                                data: {},
                              },
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 5,
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "/techniques/growth",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Methods for growing ",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 2,
                                    },
                                  },
                                ],
                              },
                              {
                                object: "leaf",
                                text: "Dictyostelium",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "italic",
                                    data: {},
                                  },
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 2,
                                    },
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
                            text: " ",
                            marks: [
                              {
                                object: "mark",
                                type: "italic",
                                data: {},
                              },
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: "(",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: "Fey et al. 2007",
                            marks: [
                              {
                                object: "mark",
                                type: "italic",
                                data: {},
                              },
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: ")  ",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "heading_3",
                    data: {
                      className: null,
                    },
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
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "/techniques/development",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Methods for ",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 2,
                                    },
                                  },
                                ],
                              },
                              {
                                object: "leaf",
                                text: "Dictyostelium",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "italic",
                                    data: {},
                                  },
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 2,
                                    },
                                  },
                                ],
                              },
                              {
                                object: "leaf",
                                text: " development ",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 2,
                                    },
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
                            text: "(",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: "Fey et al. 2007",
                            marks: [
                              {
                                object: "mark",
                                type: "italic",
                                data: {},
                              },
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: ")  ",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "heading_3",
                    data: {
                      className: null,
                    },
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
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "/research/techniques/dicty-storage",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Dictyostelium",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "italic",
                                    data: {},
                                  },
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 2,
                                    },
                                  },
                                ],
                              },
                              {
                                object: "leaf",
                                text: " cell storage procedures",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 2,
                                    },
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
                            text: " (",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: "Fey et al. 2007",
                            marks: [
                              {
                                object: "mark",
                                type: "italic",
                                data: {},
                              },
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: ")  ",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "heading_3",
                    data: {
                      className: null,
                    },
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
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "/research/techniques/soft-agar",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Plating ",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 2,
                                    },
                                  },
                                ],
                              },
                              {
                                object: "leaf",
                                text: "Dictyostelium",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "italic",
                                    data: {},
                                  },
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 2,
                                    },
                                  },
                                ],
                              },
                              {
                                object: "leaf",
                                text: " in soft agar",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 2,
                                    },
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
                            text: " * ",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "heading_3",
                    data: {
                      className: null,
                    },
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
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "https://github.com/dictyBase/migration-data/files/5922084/Thawing.cells.from.DMSO.stocks.docx",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Thawing cells from DMSO stocks",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 2,
                                    },
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
                            text: " (contributed by Dave Knecht)",
                            marks: [
                              {
                                object: "mark",
                                type: "italic",
                                data: {},
                              },
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "heading_3",
                    data: {
                      className: null,
                    },
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
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 5,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "heading_3",
                    data: {
                      className: null,
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "Sexual Genetics",
                            marks: [
                              {
                                object: "mark",
                                type: "bold",
                                data: {},
                              },
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 5,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "heading_3",
                    data: {
                      className: null,
                    },
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
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 5,
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "/research/techniques/parasexual-genetics",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Methods for parasexual genetics",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 2,
                                    },
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
                            text: " ",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: "(contributed by Jason King and Robert Insall)",
                            marks: [
                              {
                                object: "mark",
                                type: "italic",
                                data: {},
                              },
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: " ",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "block",
                    type: "heading_3",
                    data: {
                      className: null,
                    },
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
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "/research/techniques/mating-types",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Method for determining mating types",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "font-size",
                                    data: {
                                      fontSizeIndex: 2,
                                    },
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
                            text: " ",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: "(contributed by Jakob Franke)",
                            marks: [
                              {
                                object: "mark",
                                type: "italic",
                                data: {},
                              },
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                          {
                            object: "leaf",
                            text: " ",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 2,
                                },
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
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
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Molecular Biology",
                        marks: [
                          {
                            object: "mark",
                            type: "bold",
                            data: {},
                          },
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
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
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "inline",
                    type: "link",
                    data: {
                      href: "/research/techniques/quick-genomic-dna-extraction",
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "Quick extraction of genomic DNA",
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
                        text: " ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "(contributed by Steve Charette and Pierre Cosson) ",
                        marks: [
                          {
                            object: "mark",
                            type: "italic",
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
                type: "heading_3",
                data: {
                  className: null,
                },
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
                            type: "italic",
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "inline",
                    type: "link",
                    data: {
                      href: "/research/techniques/genomic-dna-extraction",
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "Isolation of genomic DNA",
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
                        text: " * ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
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
                  {
                    object: "inline",
                    type: "link",
                    data: {
                      href: "/research/techniques/genomic-dna-extraction-csci",
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "Isolation of genomic DNA with CsCl",
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
                        text: " * ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
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
                  {
                    object: "inline",
                    type: "link",
                    data: {
                      href: "/research/techniques/rt-pcr",
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "RT-PCR for Knockout Screening and Expression Analysis",
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
                        text: " ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "(contributed by Robin Williams)",
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
                        text: " ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
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
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Transformation",
                        marks: [
                          {
                            object: "mark",
                            type: "bold",
                            data: {},
                          },
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
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
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "inline",
                    type: "link",
                    data: {
                      href: "/research/techniques/transformation-protocols",
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "Transformation protocols",
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
                        text: " (",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "Gaudet et al. 2007",
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
                        text: ")  ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
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
                  {
                    object: "inline",
                    type: "link",
                    data: {
                      href: "/research/techniques/calcium-phosphate-precipitation",
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "Calcium phosphate precipitation",
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
                        text: " * ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
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
                  {
                    object: "inline",
                    type: "link",
                    data: {
                      href: "/research/techniques/electroporation",
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "Electroporation",
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
                        text: " ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "(contributed by Dave Knecht) ",
                        marks: [
                          {
                            object: "mark",
                            type: "italic",
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
                type: "heading_3",
                data: {
                  className: null,
                },
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
                            type: "italic",
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "inline",
                    type: "link",
                    data: {
                      href: "/research/techniques/transformation-nc4",
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "Transformation of NC4 or ",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "D. mucoroides",
                            marks: [
                              {
                                object: "mark",
                                type: "italic",
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
                        text: " (contributed by Harry MacWilliams) ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Microinjection ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "(contributed by Yoshio Fukui)",
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
                        text: "  ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Transformation by particle gun ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "(contributed by Birgit Wetterauer and Hans-Ulrich Koop) ",
                        marks: [
                          {
                            object: "mark",
                            type: "italic",
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
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Addition of heat-killed bacteria to transformants * ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Transformant selection on bacterial lawns using the V18-Tn5-cassette ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "(contributed by Harry MacWilliams)",
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
                        text: " ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
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
                  {
                    object: "inline",
                    type: "link",
                    data: {
                      href: "/research/techniques/dapi-electroporation",
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "DAPI Electroporation",
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
                        text: "",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
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
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Mutagenesis",
                        marks: [
                          {
                            object: "mark",
                            type: "bold",
                            data: {},
                          },
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
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
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "inline",
                    type: "link",
                    data: {
                      href: "/research/techniques/remi-mutagenesis",
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "Restriction-enzyme mediated insertional mutagenesis",
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
                        text: " (REMI)",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
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
                  {
                    object: "inline",
                    type: "link",
                    data: {
                      href: "/research/techniques/rnai-procedure",
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "RNAi procedure",
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
                        text: " ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "(contributed by Alan Kimmel)",
                        marks: [
                          {
                            object: "mark",
                            type: "italic",
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
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Making double mutants by diploid genetics ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "(contributed by Jason King and Robert Insall)",
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
                        text: " ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
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
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Gene Expression",
                        marks: [
                          {
                            object: "mark",
                            type: "bold",
                            data: {},
                          },
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Chromatin Immuno-precipitation ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "(contributed by Jeff Williams and Y. Yamada)",
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
                        text: " ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Whole mount ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "in situ",
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
                        text: " hybridization ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "(contributed by Ricardo Escalante and Bill Loomis)",
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
                        text: " ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Agar overlay technique ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "(contributed by Yoshio Fukui)",
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
                        text: " ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Indirect immunofluorescence * ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
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
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Microscopy",
                        marks: [
                          {
                            object: "mark",
                            type: "bold",
                            data: {},
                          },
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Fixation techniques for immunonfluorescence ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "(contributed by Richard Gomer)",
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
                        text: " ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Visualizing weak fluorescence in multicellular stages ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "(contributed by Harry MacWilliams)",
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
                        text: " ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
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
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Biochemistry",
                        marks: [
                          {
                            object: "mark",
                            type: "bold",
                            data: {},
                          },
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "S-methionine labelling of ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "Dictyostelium",
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
                        text: "*",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "phosphate labelling of ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "Dictyostelium",
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
                        text: "* ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
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
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Cytoskeleton",
                        marks: [
                          {
                            object: "mark",
                            type: "bold",
                            data: {},
                          },
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
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
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "Protein preparation",
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
                        text: " ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "paragraph",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " Isolation of ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "Dictyostelium",
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
                        text: " cytoskeleton *",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "paragraph",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " Isolation of ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "Dictyostelium",
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
                        text: " centrosomes ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "(contributed by Ralph Gräf)",
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
                        text: " ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "paragraph",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " Preparation of microtubule-associated motor proteins *",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "paragraph",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " Purification of muscle actin *",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "paragraph",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " One-day ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "Dictyostelium",
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
                        text: " myosin preparation *",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "paragraph",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " Three-day ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "Dictyostelium",
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
                        text: " myosin preparation * ",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "paragraph",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " Dictyostelium",
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
                        text: " cell staining for tubulin ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "(contributed by Emma Dalton)",
                        marks: [
                          {
                            object: "mark",
                            type: "italic",
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
                type: "line-spacing",
                data: {
                  size: "1.0",
                },
                nodes: [
                  {
                    object: "block",
                    type: "paragraph",
                    data: {
                      className: null,
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "  ",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 0,
                                },
                              },
                            ],
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
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " Protein assays",
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
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " Microtubule gliding assay for microtubule-associated motors *",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "paragraph",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " ATPase assay for dynein (radioactive) *",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "paragraph",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " CTPase assay for dynein (colorimetric) *",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "paragraph",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "  ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "in vitro",
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
                        text: " motility assay *",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "paragraph",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " ATPase assay for ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "Dictyostelium",
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
                        text: " myosin *",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "paragraph",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " Estimation of the number of active myosin heads in isolated myosin *",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "paragraph",
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " Myosin-F-actin binding by pelleting assay *",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "line-spacing",
                data: {
                  size: "1.0",
                },
                nodes: [
                  {
                    object: "block",
                    type: "paragraph",
                    data: {
                      className: null,
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "   ",
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
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " Protein detection",
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
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " Dictyostelium",
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
                        text: " anti-γ-tubulin Westerns ",
                        marks: [],
                      },
                      {
                        object: "leaf",
                        text: "(contributed by Emma Dalton)",
                        marks: [
                          {
                            object: "mark",
                            type: "italic",
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
                type: "heading_3",
                data: {
                  className: null,
                },
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
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "heading_3",
                data: {
                  className: null,
                },
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
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    object: "inline",
                    type: "link",
                    data: {
                      href: "/explore/teach",
                    },
                    nodes: [
                      {
                        object: "text",
                        leaves: [
                          {
                            object: "leaf",
                            text: "Teaching Tools",
                            marks: [
                              {
                                object: "mark",
                                type: "font-size",
                                data: {
                                  fontSizeIndex: 5,
                                },
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
                        text: "",
                        marks: [
                          {
                            object: "mark",
                            type: "font-size",
                            data: {
                              fontSizeIndex: 5,
                            },
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
                data: {
                  className: null,
                },
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
                          {
                            object: "mark",
                            type: "italic",
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
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "* This experimental protocol was taken from the Rex Chisholm Lab's Dictyostelium Techniques Manual. Many of these protocols are the result of the contributions and collaborations of many different laboratories. ",
                        marks: [
                          {
                            object: "mark",
                            type: "bold",
                            data: {},
                          },
                          {
                            object: "mark",
                            type: "italic",
                            data: {},
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

const cite = {
  object: "value",
  document: {
    object: "document",
    data: {},
    nodes: [
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
        type: "align_center",
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
                data: {
                  className: null,
                },
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: "Cite Us",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "align_center",
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
                type: "paragraph",
                data: {},
                nodes: [
                  {
                    object: "text",
                    leaves: [
                      {
                        object: "leaf",
                        text: " ",
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
                        text: "Please cite us in your publication if dictyBase/DSC helped you achieve your results. Thank you!",
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
                        text: "    \n",
                        marks: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "align_left",
        data: {},
        nodes: [
          {
            object: "block",
            type: "h2",
            data: {
              className: null,
            },
            nodes: [
              {
                object: "text",
                leaves: [
                  {
                    object: "leaf",
                    text: "dictyBase",
                    marks: [],
                  },
                ],
              },
            ],
          },
          {
            object: "block",
            type: "unordered-list",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item",
                data: {},
                nodes: [
                  {
                    object: "block",
                    type: "list-item-child",
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
                                text: "Fey P, Dodson RJ, Basu S, Hartline EC, Chisholm RL.",
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
                                marks: [
                                  {
                                    object: "mark",
                                    type: "link",
                                    data: {
                                      href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7409682/",
                                    },
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            object: "inline",
                            type: "link",
                            data: {
                              href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7409682/",
                            },
                            nodes: [
                              {
                                object: "text",
                                leaves: [
                                  {
                                    object: "leaf",
                                    text: "dictyBase and the Dicty Stock Center (version 2.0) - a progress report.",
                                    marks: [
                                      {
                                        object: "mark",
                                        type: "link",
                                        data: {
                                          href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7409682/",
                                        },
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
                                text: "",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "link",
                                    data: {
                                      href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7409682/",
                                    },
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
                                text: "Int J Dev Biol.2019;63(8-9-10):563-572.",
                                marks: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                object: "block",
                type: "list-item",
                data: {},
                nodes: [
                  {
                    object: "block",
                    type: "list-item-child",
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
                                text: "Basu, S., Fey, P., Jimenez-Morales, D., Dodson, R. J., & Chisholm, R. L. (2015)",
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
                          {
                            object: "inline",
                            type: "link",
                            data: {
                              href: "https://onlinelibrary.wiley.com/doi/full/10.1002/dvg.22867",
                            },
                            nodes: [
                              {
                                object: "text",
                                leaves: [
                                  {
                                    object: "leaf",
                                    text: "dictyBase 2015: Expanding data and annotations in a new software environment.",
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
                                text: "Genesis",
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
                                text: " 53(8), 523–534.",
                                marks: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
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
        data: {
          className: null,
        },
        nodes: [
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: "Dicty Stock Center and dictyBase ",
                marks: [],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "unordered-list",
        data: {},
        nodes: [
          {
            object: "block",
            type: "list-item",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item-child",
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
                            text: "Fey, P., Dodson, R., Basu, S., Chisholm, R. L. (2013).\n ",
                            marks: [],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "http://link.springer.com/protocol/10.1007%2F978-1-62703-302-2_4",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "'One Stop Shop for Everything Dictyostelium: dictyBase and the Dicty Stock Center'.",
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
                            text: "\n",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "Dictyostelium discoideum Protocols.",
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
                            text: "\n",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "Methods Mol. Biol.",
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
                            text: " 983:59-92, edited by Ludwig Eichinger and Francisco Rivero. ",
                            marks: [],
                          },
                        ],
                      },
                    ],
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
        data: {
          className: null,
        },
        nodes: [
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: "More publications by dictyBase ",
                marks: [],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "unordered-list",
        data: {},
        nodes: [
          {
            object: "block",
            type: "list-item",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item-child",
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
                            text: "Basu, S., Fey, P., Pandit, Y., Dodson, R. J., Kibbe, W. A., Chisholm, R. L. (2013).\n",
                            marks: [],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "http://nar.oxfordjournals.org/content/41/D1/D676.long",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "DictyBase 2013: integrating multiple Dictyostelid species.",
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
                            text: "\n",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "Nucleic Acids Res.",
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
                            text: " 41 (Database issue): D676-83. \n            ",
                            marks: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            object: "block",
            type: "list-item",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item-child",
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
                            text: "Gaudet, P., Fey, P., Basu, S., Bushmanova, Y. A., Dodson, R., Sheppard K. A., Just, E. M., Kibbe, W. A., Chisholm, R. L. (2011).\n",
                            marks: [],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "http://nar.oxfordjournals.org/content/39/suppl_1/D620.full",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "dictyBase update 2011: web 2.0 functionality and the initial steps towards a genome portal for the Amoebozoa.",
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
                            text: "\n",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "Nucleic Acids Res.",
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
                            text: " (Database issue): D620-D24. ",
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
                ],
              },
            ],
          },
          {
            object: "block",
            type: "list-item",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item-child",
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
                            text: "Fey, P., Gaudet, P., Curk, T., Zupan, B., Just, E. M., Basu, S., Merchant, S. N., Bushmanova, Y. A., Shaulsky,  G., Kibbe, W. A., Chisholm, R. L. (2009).\n",
                            marks: [],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "http://nar.oxfordjournals.org/cgi/content/full/37/suppl_1/D515",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "dictyBase - a Dictyostelium bioinformatics resource update.",
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
                            text: "\n",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "Nucleic Acids Res.",
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
                            text: " 37, (Database issue): D515-19. ",
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
                ],
              },
            ],
          },
          {
            object: "block",
            type: "list-item",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item-child",
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
                            text: "Chisholm RL, Gaudet P, Just EM, Pilcher KE, Fey P, Merchant SN, Kibbe WA. (2006).\n",
                            marks: [],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=pubmed&dopt=Abstract&list_uids=16381903&query_hl=1&itool=pubmed_docsum",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "dictyBase, the model organism database for Dictyostelium discoideum.",
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
                            text: "\n",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "Nucleic Acids Res.",
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
                            text: " 34 (Database issue): D423-7. \n            ",
                            marks: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            object: "block",
            type: "list-item",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item-child",
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
                            text: "Fey P, Gaudet P, Pilcher KE, Franke J and Chisholm RL. 2006.\n",
                            marks: [],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "http://www.humanapress.com/ProductDetail.pasp?txtCatalog=HumanaBooks&txtProductID=1%2D59745%2D144%2D4",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "dictyBase and the Dicty Stock Center",
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
                            text: ".\n",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "In",
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
                            text: " Dictyostelium discoideum Protocols. L. Eichinger and F. Rivero, editors. Humana Press, 346: 51-74.\n",
                            marks: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            object: "block",
            type: "list-item",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item-child",
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
                            text: "Chisholm RL. 2005.\n",
                            marks: [],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "http://www.horizonpress.com/hsp/books/dicty.html",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "dictyBase: Using the Genome to Organize Dictyostelium Biology.",
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
                            text: "\n",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "In",
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
                            text: " Dictyostelium Genomics. W. Loomis and A. Kuspa, editors. Horizon Press. Pp. 23-39. ",
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
                ],
              },
            ],
          },
          {
            object: "block",
            type: "list-item",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item-child",
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
                            text: "Kreppel L, Fey P, Gaudet P, Just E, Kibbe WA, Chisholm RL, Kimmel AR. (2004)\n",
                            marks: [],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=14681427",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "dictyBase: a new Dictyostelium discoideum genome database.",
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
                            text: "\n",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "Nucleic Acids Res.",
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
                            text: " 32 (Database issue): D332-3. ",
                            marks: [],
                          },
                        ],
                      },
                    ],
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
        data: {
          className: null,
        },
        nodes: [
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: "Citing the Dictyostelium Genome      ",
                marks: [],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "unordered-list",
        data: {},
        nodes: [
          {
            object: "block",
            type: "list-item",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item-child",
                data: {},
                nodes: [
                  {
                    object: "block",
                    type: "line-spacing",
                    data: {
                      size: "1.3",
                    },
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
                                text: "Eichinger L, Pachebat JA, Glockner G, Rajandream MA, Sucgang R, Berriman M, Song J, Olsen R, Szafranski K, Xu Q, Tunggal B, Kummerfeld S, Madera M, Konfortov BA, Rivero F, Bankier AT, Lehmann R, Hamlin N, Davies R, Gaudet P, Fey P, Pilcher K, Chen G, Saunders D, Sodergren E, Davis P, Kerhornou A, Nie X, Hall N, Anjard C, Hemphill L, Bason N, Farbrother P, Desany B, Just E, Morio T, Rost R, Churcher C, Cooper J, Haydock S, van Driessche N, Cronin A, Goodhead I, Muzny D, Mourier T, Pain A, Lu M, Harper D, Lindsay R, Hauser H, James K, Quiles M, Madan Babu M, Saito T, Buchrieser C, Wardroper A, Felder M, Thangavelu M, Johnson D, Knights A, Loulseged H, Mungall K, Oliver K, Price C, Quail MA, Urushihara H, Hernandez J, Rabbinowitsch E, Steffen D, Sanders M, Ma J, Kohara Y, Sharp S, Simmonds M, Spiegler S, Tivey A, Sugano S, White B, Walker D, Woodward J, Winckler T, Tanaka Y, Shaulsky G, Schleicher M, Weinstock G, Rosenthal A, Cox EC, Chisholm RL, Gibbs R, Loomis WF, Platzer M, Kay RR, Williams J, Dear PH, Noegel AA, Barrell B, Kuspa A. (2005)\n",
                                marks: [],
                              },
                            ],
                          },
                          {
                            object: "inline",
                            type: "link",
                            data: {
                              href: "http://www.nature.com/nature/journal/v435/n7038/abs/nature03481.html",
                            },
                            nodes: [
                              {
                                object: "text",
                                leaves: [
                                  {
                                    object: "leaf",
                                    text: "The genome of the social amoeba ",
                                    marks: [],
                                  },
                                  {
                                    object: "leaf",
                                    text: "Dictyostelium discoideum",
                                    marks: [
                                      {
                                        object: "mark",
                                        type: "italic",
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
                                text: ".\n",
                                marks: [],
                              },
                              {
                                object: "leaf",
                                text: "Nature",
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
                                text: " 435(7038): 43-57. ",
                                marks: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "align_left",
        data: {},
        nodes: [
          {
            object: "block",
            type: "unordered-list",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item",
                data: {},
                nodes: [
                  {
                    object: "block",
                    type: "list-item-child",
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
                                text: "Ribosomal DNA sequence:",
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
                                text: "\n                \nSucgang R, Chen G, Liu W, Lindsay R, Lu J, Muzny D, Shaulsky G, Loomis WF, Gibbs R and Kuspa A. (2003)\n",
                                marks: [],
                              },
                            ],
                          },
                          {
                            object: "inline",
                            type: "link",
                            data: {
                              href: "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=12711681&dopt=Abstract",
                            },
                            nodes: [
                              {
                                object: "text",
                                leaves: [
                                  {
                                    object: "leaf",
                                    text: "Sequence and structure of the extrachromosomal palindrome encoding the ribosomal RNA genes in ",
                                    marks: [],
                                  },
                                  {
                                    object: "leaf",
                                    text: "Dictyostelium",
                                    marks: [
                                      {
                                        object: "mark",
                                        type: "italic",
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
                                text: ".\n",
                                marks: [],
                              },
                              {
                                object: "leaf",
                                text: "Nucl. Acids Res.",
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
                                text: " 31(9):2361-2368. ",
                                marks: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "unordered-list",
        data: {},
        nodes: [
          {
            object: "block",
            type: "list-item",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item-child",
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
                            text: "Chromosome 2 sequence:",
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
                            text: "\n                \nGloeckner G, Eichinger L, Szafranski K, Pachebat JA, Bankier AT, Dear PH, Lehmann R, Baumgart C, Parra G, Abril JF, Guigo R, Kumpf K, Tunggal B, the Dictyostelium Genome Sequencing Consortium, Cox E, Quail MA, Platzer M, Rosenthal A & Noegel AA.\n",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "Dictyostelium",
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
                            text: " Genome Sequencing Consortium. (2002)\n",
                            marks: [],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=12097910&dopt=Abstract",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Sequence and analysis of chromosome 2 of ",
                                marks: [],
                              },
                              {
                                object: "leaf",
                                text: "Dictyostelium discoideum",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "italic",
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
                            text: ".\n",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "Nature",
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
                            text: " 418(6893):79-85. ",
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
                ],
              },
            ],
          },
          {
            object: "block",
            type: "list-item",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item-child",
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
                            text: "Mitochondrial genome:",
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
                            text: "\n                \nOgawa S, Yoshino R, Angata K, Iwamoto M, Pi M, Kuroe K, Matsuo K, Morio T, Urushihara H, Yanagisawa K, Tanaka Y. (2000)\n",
                            marks: [],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=10821186&dopt=Abstract",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "The mitochondrial DNA of ",
                                marks: [],
                              },
                              {
                                object: "leaf",
                                text: "Dictyostelium discoideum",
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
                                text: ": complete sequence, gene content and genome organization",
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
                            text: ".\n",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "Mol. Gen. Genet.",
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
                            text: " 263(3):514-9 ",
                            marks: [],
                          },
                        ],
                      },
                    ],
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
                marks: [],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "h2",
        data: {
          className: null,
        },
        nodes: [
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: "Citing the cDNA project ",
                marks: [],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "paragraph",
        data: {
          className: null,
        },
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
        data: {
          className: null,
        },
        nodes: [
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: "The  ",
                marks: [],
              },
              {
                object: "leaf",
                text: "Dictyostelium",
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
                text: " cDNA project has been initiated in 1996 at the University of Tsukaba in Japan. ",
                marks: [],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "unordered-list",
        data: {},
        nodes: [
          {
            object: "block",
            type: "list-item",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item-child",
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
                            text: "Morio T, Urushihara H, Saito T, Ugawa Y, Mizuno H, Yoshida M, Yoshino R, Mitra BN, Pi M, Sato T, Takemoto K, Yasukawa H, Williams J, Maeda M, Takeuchi I, Ochiai H, Tanaka Y. (1998)\n",
                            marks: [],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=10048482&dopt=Abstract",
                        },
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
                                text: "Dictyostelium",
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
                                text: " developmental cDNA project: generation and analysis of expressed sequence tags from the first-finger stage of development",
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
                            text: ".\n",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "DNA Res.",
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
                            text: " 5(6):335-40. ",
                            marks: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            object: "block",
            type: "list-item",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item-child",
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
                            text: "Description of EST assemblies:",
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
                            text: "\n                \nUrushihara H, Morio T, Saito T, Kohara Y, Koriki E, Ochiai H, Maeda M, Williams JG, Takeuchi I, Tanaka Y. (2004)\n",
                            marks: [],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&dopt=Abstract&list_uids=15010511",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "Analyses of cDNAs from growth and slug stages of Dictyostelium discoideum.",
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
                            text: "\n",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "Nucleic Acids Res.",
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
                            text: " 32(5):1647-53. \n            ",
                            marks: [],
                          },
                        ],
                      },
                    ],
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
        data: {
          className: null,
        },
        nodes: [
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: "HAPPY Mapping        ",
                marks: [],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "paragraph",
        data: {
          className: null,
        },
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
        data: {
          className: null,
        },
        nodes: [
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: "HAPPY mapping of the ",
                marks: [],
              },
              {
                object: "leaf",
                text: "Dictyostelium",
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
                text: " genome is done at the MRC Laboratory of Molecular Biology, Cambridge. ",
                marks: [],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "unordered-list",
        data: {},
        nodes: [
          {
            object: "block",
            type: "list-item",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item-child",
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
                            text: "Konfortov BA, Cohen HM, Bankier AT, Dear PH. (2000)\n",
                            marks: [],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=retrieve&db=pubmed&list_uids=11076859&dopt=Abstract",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "A High-Resolution HAPPY Map of ",
                                marks: [],
                              },
                              {
                                object: "leaf",
                                text: "Dictyostelium discoideum",
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
                                text: " Chromosome 6",
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
                            text: ".\n",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "Genome Res.",
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
                            text: " 10(11):1737-42.",
                            marks: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            object: "block",
            type: "list-item",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item-child",
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
                            text: "A high resolution HAPPY map of the ",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "Dictyostelium discoideum",
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
                            text: " genome. Pachebat JA, Bankier AT, Konfortov BA, Dear PH, Gloeckner G, Szafranski K, Sucgang R, Rajandream M.-A, Davies R, Bloomfield G, Noegel A. (2003) The ",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "Dictyostelium",
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
                            text: " Genome Sequencing Consortium.\n",
                            marks: [],
                          },
                          {
                            object: "leaf",
                            text: "Abstract from the ",
                            marks: [
                              {
                                object: "mark",
                                type: "italic",
                                data: {},
                              },
                            ],
                          },
                        ],
                      },
                      {
                        object: "inline",
                        type: "link",
                        data: {
                          href: "http://www.latrobe.edu.au/dicty2003/abstract.pdf",
                        },
                        nodes: [
                          {
                            object: "text",
                            leaves: [
                              {
                                object: "leaf",
                                text: "International Dictyostelium conference",
                                marks: [
                                  {
                                    object: "mark",
                                    type: "italic",
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
                            text: "\n",
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
                            text: "            ",
                            marks: [],
                          },
                        ],
                      },
                    ],
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
        data: {
          className: null,
        },
        nodes: [
          {
            object: "text",
            leaves: [
              {
                object: "leaf",
                text: "GenBank Sequences",
                marks: [],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "unordered-list",
        data: {},
        nodes: [
          {
            object: "block",
            type: "list-item",
            data: {},
            nodes: [
              {
                object: "block",
                type: "list-item-child",
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
                            text: "If GenBank sequence entries are to be cited, the citation should include the sequence name and GenBank accession number. For example: The GenBank accession number for the sequence reported in this paper is U12980.",
                            marks: [],
                          },
                        ],
                      },
                    ],
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
                text: "\nThe GenBank accession number for the full genome sequence is AAFI00000000.",
                marks: [],
              },
            ],
          },
        ],
      },
    ],
  },
};

const history = {
  "object": "value",
  "document": {
    "object": "document",
    "data": {},
    "nodes": [
      {
        "object": "block",
        "type": "h1",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "A short history of the axenic strains of Dictyostelium discoideum",
                "marks": [
                  {
                    "object": "mark",
                    "type": "bold",
                    "data": {}
                  },
                  {
                    "object": "mark",
                    "type": "font-size",
                    "data": {
                      "fontSizeIndex": 6
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "h1",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": [
                  {
                    "object": "mark",
                    "type": "bold",
                    "data": {}
                  },
                  {
                    "object": "mark",
                    "type": "font-size",
                    "data": {
                      "fontSizeIndex": 6
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Sussman and Sussman (1967; d3234) report the first isolation of an axenically growing strain Ax-1 by sub-culturing of their lab strain DdB (NC-4) in an HL5-like medium containing liver extract and fetal calf serum. There is no mention of mutagens. DdB is an NC-4 derivative selected by the continuous sub-culturing of colonies that showed more synchronous development and less spreading colony morphology. The first mentioning of DdB is by Brackenbury",
                "marks": []
              },
              {
                "object": "leaf",
                "text": "et al.",
                "marks": [
                  {
                    "object": "mark",
                    "type": "italic",
                    "data": {}
                  }
                ]
              },
              {
                "object": "leaf",
                "text": "(1974; d0154).",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Both Schwalb and Roth (1970; d1394) and Watts and Ashworth (1970; d2187) eliminate the serum and liver extract from the medium by prolonged sub-culturing of Ax-1. Again, there is no mention of mutagens. Watts and Ashworth call the isolate, which can grow in the simplified medium, Ax-2 (AX2). Ax-1 seems to have been lost.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Cocucci and Sussman (1970; d0244) use the term HL-5 (HL5) medium to describe the simplified axenic medium.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Loomis (1971; d2992) isolates independently an axenic strain with the use of N-methyl-Ni-nitro-N-nitrosoguanidine, and calls this strain A3 (AX3).",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Williams",
                "marks": []
              },
              {
                "object": "leaf",
                "text": "et al.",
                "marks": [
                  {
                    "object": "mark",
                    "type": "italic",
                    "data": {}
                  }
                ]
              },
              {
                "object": "leaf",
                "text": "(1974; d1988) establish that at least two recessive mutations (axeA on linkage group II and axeB on linkage group III) are involved in axenic growth. North and Williams (1978; d1164) establish that a third locus axeC on linkage group II is involved in the axenic growth of strains AX2 and AX3.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Franke and Kessin (1977; d0473) develop a defined minimal medium (FM) for the axenic strain AX3 (AX2 grows well in it too). Their axenic strain probably came by way of Frank Rothmanis laboratory. The same article contains a simplified recipe for HL5. Be careful though: the modified HL5 recipe is less concentrated than the original version, but shows the same growth kinetics. Occasionally a version of HL5 containing maltose rather than glucose is used (Cosson",
                "marks": []
              },
              {
                "object": "leaf",
                "text": "et al.",
                "marks": [
                  {
                    "object": "mark",
                    "type": "italic",
                    "data": {}
                  }
                ]
              },
              {
                "object": "leaf",
                "text": "2002; d7294 and Korohada",
                "marks": []
              },
              {
                "object": "leaf",
                "text": "et al.",
                "marks": [
                  {
                    "object": "mark",
                    "type": "italic",
                    "data": {}
                  }
                ]
              },
              {
                "object": "leaf",
                "text": "2002; d7353). A more detailed protocol on how to prepare FM can be found",
                "marks": []
              },
              {
                "object": "leaf",
                "text": "here",
                "marks": [
                  {
                    "object": "mark",
                    "type": "link",
                    "data": {
                      "href": "http://dictybase.org/techniques/media/fm-medium.html"
                    }
                  }
                ]
              },
              {
                "object": "leaf",
                "text": ".",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "The Kessin lab AX3 strain has since been renamed AX3-K or AX4 (Knecht",
                "marks": []
              },
              {
                "object": "leaf",
                "text": "et al.",
                "marks": [
                  {
                    "object": "mark",
                    "type": "italic",
                    "data": {}
                  }
                ]
              },
              {
                "object": "leaf",
                "text": "1986; d0876).",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Jakob Franke, 7/30/2003",
                "marks": [
                  {
                    "object": "mark",
                    "type": "bold",
                    "data": {}
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": [
                  {
                    "object": "mark",
                    "type": "bold",
                    "data": {}
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "h1",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Dictyostelium ",
                "marks": [
                  {
                    "object": "mark",
                    "type": "italic",
                    "data": {}
                  },
                  {
                    "object": "mark",
                    "type": "font-size",
                    "data": {
                      "fontSizeIndex": 4
                    }
                  },
                  {
                    "object": "mark",
                    "type": "bold",
                    "data": {}
                  },
                  {
                    "object": "mark",
                    "type": "font-color",
                    "data": {
                      "color": "#d0021b"
                    }
                  }
                ]
              },
              {
                "object": "leaf",
                "text": "Strain History discussion",
                "marks": [
                  {
                    "object": "mark",
                    "type": "font-size",
                    "data": {
                      "fontSizeIndex": 4
                    }
                  },
                  {
                    "object": "mark",
                    "type": "bold",
                    "data": {}
                  },
                  {
                    "object": "mark",
                    "type": "font-color",
                    "data": {
                      "color": "#d0021b"
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "line-spacing",
        "data": {
          "size": "1.0"
        },
        "nodes": [
          {
            "object": "block",
            "type": "paragraph",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          },
          {
            "object": "block",
            "type": "paragraph",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "Date: Tue, 2 Nov 1999 14:41:46 -0600",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Chris LaRosa contacted me with some questions about the genealogy of the commonly used axenic strains, and I answered to the best of my knowledge, but I would like to throw the question and answers out to the people who may have a better recall of the history:",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "NC-4 --> Ax1 (Sussman and Sussman)",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Ax1--> Ax2 (Watts and Ashworth)",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "NC-4 --> Ax3 (Loomis)",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Ax3--> Ax3K / aka KAx3 (Franke and Kessin)",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Ax3K --> Ax4 (???)",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Does this look right? It would be nice to hear from whoever can lay claim to first naming Ax4.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "-ricky",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "divider",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Tue, 2 Nov 1999 13:21:26 -0800",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "I think think that KAx-3 (Ax-3K) and Ax-4 are the same.I think Bill didn't like the Ax-3 name.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Best-",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Rick",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "divider",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "\nDate: Tue, 02 Nov 1999 16:48:20 -0500",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Dear Colleagues,",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "According to our records, which are pretty good, we sent strain AX3(1), which has been stored in our lab since 1974 to Bill in June of 1980. Bill, thinking it looked different from other Ax3s, named in AX4. We sent the strain to Rick at the same time and he named it KAX3, for Kessin Ax3. The strain has been maintained in silica gel by Jakob Franke for the last 25 years and not by Rich Kessin, who nevertheless got the credit, thanks to Rick. I am glad to set the record straight. Neither Jakob nor I can remember where we got our original AX3 strain.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Rich Kessin",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "divider",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "paragraph",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Tue, 2 Nov 1999 14:17:50 -0800",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "In 1984 or 1985 Dave Knecht used a stock of AX3 that we received back from Rich Kessin and selected for cells that transfomed well. He then picked a small, tight plaque and named it AX4 to keep it straight from other strains. This is the strain that we mapped and is now being sequenced.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "While I was writing this I read Rich Kessin's e-mail on this subject. I am fairly sure that I sent him AX3 while he was at Harvard. He then took it to Columbia and it wended its way back here in 1980. It was one of the stocks that we tested in 1985 and seemed a good strain for transformation.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "In my opinion the name AX4 is cleaner than KAx-3, KAX 3, AK3k etc. There are many lyophilized stocks kept here.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Bill",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "divider",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 03 Nov 1999 08:29:57",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "just for the record:",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "I believe the first genetic difference between \"AX3-K\" (AX4) and \"AX3-L\" (AX3) was found by Steve Poole in Rick's lab when he looked at the discoidin genes and sourrounding Tdds (repetitive elements).",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "regards",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "wolfgang",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "divider",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 3 Nov 1999 11:47:04 +0000",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "I donit want to get involved in the origins of the Ax4 strain discussion but I have to respond to Bill Loomis's statement that the genome of Ax4 is now being sequenced. The decision to chose Ax4 over Ax2 was hotly debated among those of us involved in the genome project and the deciding factor was the availability of the YAC map for Ax4. Ax2 has significant experimental and biological advantages over Ax3(4) and Ax4 has a large duplication in its genome that will cost us extra effort. I am not trying to re-open a closed issue but I think it important that new comers to field understand that Ax2 holds many advantages - we should not be locked into Ax4 just because we will soon know its sequence. At the level of the individual gene differences with Ax4 will be very rare, only chromosomal organisation is likely to differ significantly.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Jeff Willaim",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "divider",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 3 Nov 1999 08:51:11 -0600",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Hi Jeff,",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "I would find it interesting if you could list some of the experimental and biological advantages that Ax2 offers. Perhaps it would help us understand some of the differences.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Rex",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "divider",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "paragraph",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 3 Nov 1999 17:01:17 +0000",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Dear Rex",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "I know why we prefer Ax2 but rather than give a limited list perhaps we should poll the other groups and try to come up with a comprensive comparison with Ax3. It could be a very useful exercise.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Jeff",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "divider",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 03 Nov 1999 17:51:43 +0100",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Dear Everybody,",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Since we are on this subject, does anyone know the relationship of the DH1 strain with the other strains ?",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Thanks",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Pierre Cosson",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "divider",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 3 Nov 1999 09:01:16 -0800",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Jeff,",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "I don't think it helps to focus on the 300 kb duplication on chromosome 2 that we found in AX4 but not in AX2. How many duplications are present in AX2 and absent in AX4?",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "A more important point is that the microbial life style of Dicty leads to the accumulation of random chromosomal changes during serial passage.People like David Soll are well aware that it is essential to use a standard stock and not sub-culture more than necessary. The AX2 strain that you use and like may not be genetically the same as another stock called AX2 in another lab. We should keep genetic uniformity in mind as we push our analyses to more subtle processes.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Bill",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "divider",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 3 Nov 1999 11:22:11 -0600",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Jeff,",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "I agree it could be a useful exercise.I use Ax3 because that's what Harvey used. Not the best reason. Now we have a ton of strains with knockouts and various transgenes in Ax3 which is a better reason, but still not the best. Since you know why you like Ax2, why don't you start with your list. I'm sure everyone else will be stimulated to add their input. I'll collate everything and if it would be useful can even set up a web page that lists the advantages of each strain.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Rex",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "divider",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "paragraph",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 3 Nov 1999 18:30:57 +0100 (MET)",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Hi everyone,",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "If we are really looking for a standard, shouldnt we think about NC4? Aren't all axenic strains the results of long and little-understood selection procedures? And arent they all a little wierd, being as they go around phagocytosing liquid, and express development genes during growth?",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Harry MacWilliams",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "divider",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 3 Nov 1999 09:57:36 -0800",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Harry,",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Of course you are right that the bench mark strain is Raper's NC4. Many years ago he gave me one of the first lyophils that he made in 1935. I keep it in a reliquary.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Keep in mind that axenic strains do not express developmental genes when they are grown the same way as NC4 ie. on bacterial lawns.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Bill",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "divider",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 3 Nov 1999 12:04:47 -0600",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "I'm not sure we should be looking for a standard. We're probably too far down too many different roads for that. To my thinking the more valuable would be to understand the differences and any resulting strengths and weaknesses. Regarding NC4, what is the status of molecular genetic manipulation of NC4? Any successful knockouts?How easily is NC4 transformed?",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Rex",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "divider",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 03 Nov 1999 19:07:53 +0100",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Hi Rex,",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "I like your sentence \"I use AX3 because that's what Harvey used...\".Perhaps in some sort of sentimental way I like AX2 because I trust the strain. During my time with Guenther Gerisch I learned how rigorous one has to be to keep biological material clean and homogeneous. Ages ago (sorry HERR GERISCH), Guenther Gerisch recloned AX2 (clone 214, therefore in his papers \"AX2-214\"). This was and still is the \"holy stock\" of spores in his freezer. Once a year one aliquot was taken from this untouchable stock and analyzed for growth in axenic medium and on bacteria, for the strain's ability to develop in exactly the same well known time frame, in its expression of contact site A and other markers during early and later hours of development etc. etc. Only if the material was flawless, a batch of about 100 aliquots of spores was prepared and stored in liquid nitrogen. Once a week during the following year fresh aliquots from this batch were used for experiments. After about one year the whole procedure was repeated. I try to be as rigorous with my AX2 as I learned it from Guenther Gerisch.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "His care for a good AX2 strain is reason enough (for me) to believe in AX2 as the \"wild type\" in our genetic work. If I recall correctly, Richard Kessin treated his AX3 in a similar way as Guenther Gerisch did. I was a little bit shocked when I read Bill's statement about the different AX2 strains in Europe. I do not agree.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Michael",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "divider",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "paragraph",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 3 Nov 1999 18:33:02 +0000",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "DH1 was made by Dale Hereld in the Devreotes lab.It's an AX3 parent with the entire coding sequence of pyr56 removed using a PCR-constructed splint and FOA selection.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Robert Insall",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "divider",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "paragraph",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 3 Nov 1999 11:48:34 -0800",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Dear Boys and Girls and children of all ages:",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "I think this has gotten a bit silly. There are reasons, historical or otherwise, for using different strains. Having collaborated with Jeff for a while, I see advantages for Ax2 on some things but like KAx-3 (our Ax-3 or Ax-4) for others (signaling during aggregation, they self oscillate nicely). These type of chauvinistic comments helps no one and gets us no where.To try to suggest that everyone should shift to one strain or another is silly and not very congenial. I have thousands of strains in the lab as do other people and am not about to change and, as others have commented, many people are in the same situation. Maybe we can stop this now before others get pissed off.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Best-",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Rick",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "divider",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "paragraph",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 3 Nov 1999 14:01:14 -0600",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Rick,",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "I believe the discussion is potentially useful, but agree with you that no one is going to decide to change strains when they have a big investment. What I hope to learn is the advantages that keep getting referred to, including those you allude to in your message. It would help me make intelligent decisions about which strain to use for a particular experiment. I agree with you that this should not become a \"mine is better than yours\"",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "discussion. But I still would like to better understand the strengths and weaknesses of the main strains that people use--and this discussion could help accomplish that.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Best,",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Rex",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "divider",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 3 Nov 1999 15:08:21 -0500 (EST)",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Yeah Rick,",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "This might be childish but now I got very curious about the dark origins of the several Dicty strains....and why one would use this rather than that. I agree it will be useful information and seem kind of inaccessible for me nowadays.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Maribel Rico",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "divider",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "paragraph",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 03 Nov 1999 15:29:39 -0500",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "David Knecht should weigh in on the NC4 issue. He isolated a spontaneous axenic isolate of NC4 (bravely renamed NC4-A2) that we have been working with. It grows happily in HL5, fruits robustly (i.e. large fruiting bodies, like NC4 and unlike Ax2 & 3 which for us give much smaller fruiting bodies), and I believe it is transformable, but Knecht would need to speak to that point.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Tom Egelhoff",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "divider",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 3 Nov 1999 19:31:59 -0500 (EST)",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "The stream of strain history messages has become so large, I may as well add to it.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "In: Meth. Cell Biol. Vol. 28, page 13 (1987), Maurice Sussman writes a short history of the axenic strains. The parental strain was DdB, which was his lab strain. DdB also was the strain Bill Loomis used. DdB did not look much like the original NC-4 that I saw many years later.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "The history Raper gives (pg. 73-75 of his book) is a bit more precise and indicates that AX2 was a derivative of AX1.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "'Our' strain AX4 (AX3K) was a clone of AX3 that was used to develop the minimal medium (FM).",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "The genealogy would look like this:",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "NC-4 --> DdB --> AX1 --> AX2 --> AX3 --> AX4 = AX3K",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Jakob Franke.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "divider",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Wed, 3 Nov 1999 16:52:35 -0800",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "J-",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Thanks for clarifying what seemed to be muddy waters and establishing the genealogy. I also think that KAx-3 (Ax-3K) and Ax-4 are essentially the same strain, especially as wild-type strains used to travel around the building and back and forth across the street in La Jolla, although they have been separate for the last 5-8 years. As long as people define their strains in papers, it should be clear to all.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Best-",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Rick",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "divider",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Thu, 04 Nov 1999 09:56:15",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "I agree with Michael and assume that at least the \"Gerisch-offspring\" keeps to the ritual!",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "to start with differences:",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "we used AX4 and AX2 to look to cAMP-pulse induced ALF transcription. Pulse induction is observed in AX3 (actually K-AX3 = AX4) but not in AX2This is due (at least for ALF) to higher endogenous cAMP production of AX2 so there is no response to additional pulses. (This is of course not true for csA, the Gerisch-group standard gene to check for cAMP responsiveness). Ref. is May",
                "marks": []
              },
              {
                "object": "leaf",
                "text": "et al.",
                "marks": [
                  {
                    "object": "mark",
                    "type": "italic",
                    "data": {}
                  }
                ]
              },
              {
                "object": "leaf",
                "text": ", Mech. of Dev. 33, 147, 1991 and May",
                "marks": []
              },
              {
                "object": "leaf",
                "text": "et al.",
                "marks": [
                  {
                    "object": "mark",
                    "type": "italic",
                    "data": {}
                  }
                ]
              },
              {
                "object": "leaf",
                "text": ", MCB 9, 4653, 1989.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "regards",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "wolfgang",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "divider",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "paragraph",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Thu, 04 Nov 1999 10:05:21",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "let's compile a page with strain differences anyway. I believe this is important to sort out seemingly contradicting data obtained with different strains!I agree with Rick that the use of different strains is very useful but to nail down these differences is also!",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "wolfgang",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "divider",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "paragraph",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Thu, 4 Nov 1999 10:09:41 +0100",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "NC4 can be transformed quite easily.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "see",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Wetterauer, B.W., Morandini, P., Hribar, I., Hamker, U., Singelton, R. and MacWilliams, H.K. (1996)Transformation of nonaxenic Dictyostelium discoideum strains using a new selection cassette. Plasmid 36, 169-181",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Birgit Wetterauer",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "divider",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Thu, 4 Nov 1999 12:12:51 +0000",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Dear All,",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "If I can first explain why I wrote the original letter. I want to avoid a situation some years down the line when mine and other \"European\" papers are criticised for not using the \"standard axenic strain\" - there is no such thing; its just a question of \"horses for courses\".If you want a basic cell for cell biology or want to study early signalling Ax3 and its derivatives are fine. However,the Ax4 isolate we have used is clearly aberrant in some aspects of late development. The most dramatic example of this came from the collaboration Rick alluded to - to characterise the StatA REMI disruptant, that was isolated in Ax4.All the markers we have generated over the years were originally characterised in Ax2 but, working with Rick, we found significant differences between Ax2 and Ax4 and eventually had to re-generate the disruption in Ax2 and analyse the markers there. The most worrying difference was that the ecmB:lacZ reporter was expressed throughout the prestalk region of Ax4. In slugs of an Ax2 strain ecmB is a marker for commitment to stalk cell differentiation and is expressed in a cone of pstAB cells in the slug tip. We and John Sternfeld showed that the pstAB cells are the precursors of the inner basal disc. The important point is that John used wild type NC4 cells - so the Ax2 pattern is the correct one. To the non-cognoscenti this may all soundobtruse but it showsthat these Ax4 slugs have a prestalk zone composed of cells expressing a marker that is normally only expressed when a prestalk cell commits itself to stalk cell differentiation. This is presumably the tip of on an iceberg of mis-expression.I totally agree that Ax2 can be mis-handled, with bad consequences.I also agree that the parental strain NC4 is the benchmark and Bergit's EMAIL encourages me to try using it with the cell type markers. Adrian Harwood made a \"minimal manipulation\",axenic derivative of NC4, by simply selecting cells on plastic for growth in axenic medium, but we have never done side by side transformations with Ax2 to determine relative efficiencies. Adrian's strain would have been a good candidate for genome sequencing as it never suffered the mutagenesis that was used to generate Ax3 (Watts and Ashworth generated Ax2 by selecting unmutagenised cells).Ax3 has a duplication (Bill - In your 1995 Genetics paper it was 1Mb not 300Kb - did the subsequent YAC mapping reduce the estimate?) but Ax2 does not have that particular duplication. Once again, I am not trying to re-open a closed debate - Ax4 is being sequenced. The priority now is to make sure that is done as rapidly and accurately as joint international resources allow. What I think will be valuable is to summarise the Ax2/Ax4 differences so that we can all chose the best strain for our particular purposes.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Jeff",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "divider",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "paragraph",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Thu, 4 Nov 1999 10:00:51 -0500",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Regarding strain differences, we have compared morphogenesis and cell motion in the AX-2 and KAX-3 strains used in our lab.We found the following differences:",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "AX-2 - aggregation was later, cell trajectories in the mound were a combination of random and radial, optical density waves were concentric target patterns, culmination tended to be direct (i.e. no migrating slug)",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "KAX-3 - aggregation was earlier, cell trajectories in the mound were random early and then rotational, optical density waves were rotating spirals, slugs tended to migrate before culminating.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "The differences in culmination mode tendencies encouraged us to look at how altering buffering conditions could affect some of the other morphogenetic features we looked at.In particular we found that under the appropriate buffering conditions we could interchange not only slug migration mode, but also mound cell motion patterns (e.g. AX-2 mounds could exhibit rotational motion, and KAX-3 mounds could exhibit random and radial motion.)",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Our conclusion was that development in general in Dictyostelium is plastic, and that this plasticity is retained in each of the strains, although each strain has different developmental tendencies.So we would also argue that with respect to morphogenesis, there is no \"right strain\" to work with, since each strain exhibits behavior that the other strain is capable of exhibiting.But for example, if one wants to specifically study rotational motion, then the KAX-3 strain is a better choice.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "For details, see Kellerman and McNally, Develop. Biol. 208:416-429 (1999)",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Jim",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "James Mcnally ",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "divider",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Thu, 4 Nov 1999 09:42:01 -0800",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Jeff,",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Concerning the possibility that ecmB is expressed in a different pattern in AX4 than in AX2, the in situ hybridization data of Ricardo Escalante shows the exact same pattern of ecmB in AX4 slugs that your lab had previously described in an AX2 slug. Namely, a central core of cells containing ecmB mRNA at the anterior of slugs. Take a look at Figures 2K and 2L in:",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Escalante, R. and Loomis, W. F. (1995) Whole-mount in situ hybridization of",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Cell-type Specific mRNAs in Dictyostelium.Devel. Biol. 171:262-266.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "The strain that you and Rick were working with may have genetically diverged from AX4.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Our 1995 Genetics paper gave the size of the duplication from one end to the other - ie. 300 ± 200 kb on one side is tandemly duplication as an inversion on the other side. The ends of the duplication are not defined with an accuracy of greater than about 200 kb. Sequencing will provide the exact size and gene content of the 300 ± 200 kb duplication (about 0.1% of the genome).",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Bill",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "divider",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Fri, 5 Nov 1999 08:04:12 +0000",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Dear Dicty freaks",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Perhaps I can take a step further back for newcomers to the field and point out that there are other isolates!",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "I think it is interesting that the \"type\" strain, in our case NC4, does not always reflect the average out there in the wild, probably because the type strain almost always represents and early isolate that is cultured for years before being properly stored.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "One of the key features of the strain that we call NC4 is that it provides phage-like plaques on bacterial agar plates.I think Maurice Sussman is responsible for this as I have earlier isolates of NC4 that are more spready.If you take a wild strain (WS380B, WS576 etc) when you plate it clonally on SM agar, you first see the colony when it is about 1-2cm across as the cells don't eat their way down through the bacteria but instead spread out.This is a disaster for picking out individual colonies as you only get about 8 on a plate before they get mixed up.Maurice understood that for many lab operations you want to be able to pick out clones.NC4 (and the axenic derivatives) give you 100 or so plaques on a plate.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "My lab has been interested in the slug stage and we found that NC4 and its progeny was not well suited for such studies, so we have done most of our studies on WS380B.The point is that NC4 behaves as an \"old\" slug from the beginning, and axenic derivatives are even more pronounced.This means that even when you get the slugs to move, they leave very large numbers of cells in their trails (ie they have poor control of their rear).WS380B on the other hand migrates for days and exhibits quite different phases in it's migration.In the beginning it forms the tip so fast that the front gets going before the back is properly formed.This means you have a multicellular organism that is well formed at the front and is being assembled at the back.So the slug gets longer as it moves.Then there is a period when the organisation is sorted out and the rear of the slug gets pulled up.You then have a lovely slug that moves for several days with only small loss of cells from the rear as it migrates.Finally in old age the control of the rear breaks down and the tail elongates and cells get dropped behind.You can't have such a precise and clear slug in NC4 strains.We chose to follow the biology and we learned a lot from it.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "I am not concerned which strain gets sequenced as we know that there is a basic conservation of organisation (you have genetic maps!!), although the plasticity of the chromosomal organisation is pretty scary as Dennis Welker and I found when we were looking at translocations, where large chunks of chromosome got duplicated, chromosomes fused, etc.We know from H.pylori where two isolates have been fully sequenced that there are only(???) a hundred or so genes different between the isolates.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Finally just a small comment about the AX2 vs AX3 story.I think these strains are very similar genetically and I wouldn't be surprised if many of the differences being talked about also occur BETWEEN isolates of the same strain(ie the within lab strain variation of AX3 or AX2 may be almost as great as the AX2 vs AX3 variation).",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "The Gerisch approach is the model for anyone starting out. If you follow his protocols you'll be able to be confident that you have the same organism year after year.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Bring on the genome as it is going to revolutionise the field.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "cheers",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "keith",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "divider",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Thu, 4 Nov 1999 22:30:09 -0500",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "\nI have been out of touch, but I guess I should weigh in on several issues here.First, as to the naming of AX4, I guess I have to admit to being the major culprit.My recollection of events is slightly different from Bill's.When Wolfgang Nellen and I were struggling to get transformation to work, there was a point at which I got cells from him (the Firtel lab,",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "that is) to see if there was any difference in those cells and ours.In those days, Rick's lab every so often came downstairs to get starter cultures so my assumption was that I was getting back a variant of what we gave them.The cells I received were, as I recollect, called AX3, but behaved very differently from our Loomis lab AX3.I had no knowledge of KAx3 at that time, and so I felt it appropriate to extend the naming technology when we published work with the strain, and so we beget AX4.The difference became particularly obvious when we later made myosin mutants by antisense.Our lab AX3 did not form large multinucleated cells unless you grew them in shaking suspension, while \"AX4\" made multinucleates on dishes routinely.I have no data to claim that AX4 is not KAX3 and so all the comments made about history are probably correct.That said, I have to also agree with comments of Michael and others, that maintenance of strains is a big problem in the community.We have received numerous strains from other labs with designations of AX3, AX2 etc. that were clearly divergent from the original isolates, and so I agree with the comment that the difference between different lab AX3's is likely to be as great as that between AX2 and AX3.This should scare all of us, since this is a preventable problem and will only cause us increasing problems as technology for examination of phenotypes gets more sophisticated.Anyone who has tried collaborating with a lab that uses different lab stocks I am sure has faced the problems this creates.While I sympathize with Rex's argument that we all have lots of history built up with particular stocks, I think that it would make sense to reconsider this issue as we enter the",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "age of teh genome sequence.I would not argue that we should all work on AX2 or KAx3, but I would argue that if we say AX2, we should all have the same AX2.Some time ago, I proposed that perhaps we should identify a strain center or repository and have someone distribute to all those in the community who are concerned, a vial of the \"real thing\" with the intent that we would all maintain Gerisch level of fastidiousness thereafter.Rich could be it for Kax3, and someone in Europe for AX2.I can provide",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "NC4A2, a strain that we like and use routinely.Obviously, no one is going to recapitulate all their mutants in all new strains, but my experience says that by looking at different parental strains you often learn important information about your gene (witness the complete supression of the lethality of the myosin knockout in KAX3 on plastic).We",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "see differences in phagocytosis, macropinocytosis, SM plaques, and the phenotype of Rac mutations depending upon the strain in which we look.Some mutants have the same effect in all strains, some have subtle differences, some completely lack comparable phenotype.I consider this a benefit since any phenotype that is conserved, is really clear and important, and one that is strain specific has to be considered more cautiously. However, you might pick up hints that you wouldn't see otherwise by looking in different parentals.Therefore, we routinely make mutants in several different parental background and compare phenotypes.I would also point out that we are not unique as a community in this regard.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "I have heard exactly the same comments made about NIH3T3 cells and the variation in lab stocks.Also, I remember the problems created when two labs knocked out yeast clathrin, and one was lethal, and the other not.The advantage they had is that the had the genetics to find out what the gene was that surpressed the clathrin null mutation. We don't, and so I think we have to face this problem head on and deal with it.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "As to Tom's question about NC4A2, we routinely transform it.In fact, we see little difference in transformation efficiency between the different parental strains that we have used.We are trying out the NC4 transformation ala Harry and Birgit now, but this will obviously not solve all problems, since those of us interested in vegetative cell biology really like axenic growth conditions for some experiments.NC4A2 helps some, but it does not form AX2 like tight plaques on bacteria so it is terrible for SM screening or cloning.One other point to clarify is that this strain does not form NC4 sized fruiting bodies in my hands.It is similar to KAX3/AX4 in size. In fact, I tried several times, and could not isolate a spontaneous axenic strain with NC4 sized fruiting bodies.Perhaps there is a linkage between the pinocytosis necessary for axenic growth and some later signalling event related to the breakup of the mounds.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Dave Knecht",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "divider",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "div",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "paragraph",
            "data": {},
            "nodes": [
              {
                "object": "text",
                "leaves": [
                  {
                    "object": "leaf",
                    "text": "",
                    "marks": []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Date: Fri, 5 Nov 1999 12:00:01 +0000",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Bill",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Thanks for the information and please can we all have your isolate of Ax4, as I said earlier, the one we have hasa staining pattern with ecmB:lacZ that looks exactly like an ecmA:lacZ stain pattern. I totally agree about divergence of poorly maintained strains so perhaps what we collectively need to do is to set up some kind of strain centre/web page - where the youngest possible isolates of the commonly used strains are held and where the information about their properties is also held.What is incontestable is that there are significant differences between the axenic strains currently in circulation and, without the classical genetics needed to produce isogenic strains, we have no way other than caution and wide dissemination of information to collectively protect ourselves. I  remain confused about the duplication but that is best dealt with in one to one communication.",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "Jeff",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": []
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": [
                  {
                    "object": "mark",
                    "type": "bold",
                    "data": {}
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": [
                  {
                    "object": "mark",
                    "type": "bold",
                    "data": {}
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "data": {},
        "nodes": [
          {
            "object": "text",
            "leaves": [
              {
                "object": "leaf",
                "text": "",
                "marks": [
                  {
                    "object": "mark",
                    "type": "bold",
                    "data": {}
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}

export { newContent, oldContent, order, art, techniques, cite, history };
