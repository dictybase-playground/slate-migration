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
  "object": "value",
  "document": {
    "object": "document",
    "data": {},
    "nodes": [
      {
        "object": "block",
        "type": "align_center",
        "data": {},
        "nodes": [
          {
            "object": "block",
            "type": "alignment",
            "data": {
              "align": "left"
            },
            "nodes": [
              {
                "object": "block",
                "type": "body1",
                "data": {
                  "className": null
                },
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
                            "type": "font-family",
                            "data": {
                              "fontFamilyIndex": 2
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
                "type": "align_center",
                "data": {},
                "nodes": [
                  {
                    "object": "block",
                    "type": "alignment",
                    "data": {
                      "align": "center"
                    },
                    "nodes": [
                      {
                        "object": "block",
                        "type": "h1",
                        "data": {
                          "className": null
                        },
                        "nodes": [
                          {
                            "object": "text",
                            "leaves": [
                              {
                                "object": "leaf",
                                "text": "Techniques",
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
                    "type": "heading_3",
                    "data": {
                      "className": null
                    },
                    "nodes": [
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "Media and buffers",
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
                                  "fontSizeIndex": 5
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
                    "type": "heading_3",
                    "data": {
                      "className": null
                    },
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
                                  "fontSizeIndex": 5
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "inline",
                        "type": "link",
                        "data": {
                          "href": "/research/techniques/media"
                        },
                        "nodes": [
                          {
                            "object": "text",
                            "leaves": [
                              {
                                "object": "leaf",
                                "text": "Media and buffers ",
                                "marks": [
                                  {
                                    "object": "mark",
                                    "type": "font-size",
                                    "data": {
                                      "fontSizeIndex": 2
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
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
                    "type": "heading_3",
                    "data": {
                      "className": null
                    },
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
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "inline",
                        "type": "link",
                        "data": {
                          "href": "/research/techniques/fm-medium"
                        },
                        "nodes": [
                          {
                            "object": "text",
                            "leaves": [
                              {
                                "object": "leaf",
                                "text": "Recipe for FM defined medium",
                                "marks": [
                                  {
                                    "object": "mark",
                                    "type": "font-size",
                                    "data": {
                                      "fontSizeIndex": 2
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": " ",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          },
                          {
                            "object": "leaf",
                            "text": "(contributed by Jakob Franke)",
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
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          },
                          {
                            "object": "leaf",
                            "text": " ",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
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
                    "type": "heading_3",
                    "data": {
                      "className": null
                    },
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
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "inline",
                        "type": "link",
                        "data": {
                          "href": "/research/techniques/low-flo-medium"
                        },
                        "nodes": [
                          {
                            "object": "text",
                            "leaves": [
                              {
                                "object": "leaf",
                                "text": "Recipe for low fluorescence axenic medium",
                                "marks": [
                                  {
                                    "object": "mark",
                                    "type": "font-size",
                                    "data": {
                                      "fontSizeIndex": 2
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": " ",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          },
                          {
                            "object": "leaf",
                            "text": "(contributed by Harry MacWilliams)",
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
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          },
                          {
                            "object": "leaf",
                            "text": " ",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
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
                    "type": "heading_3",
                    "data": {
                      "className": null
                    },
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
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "inline",
                        "type": "link",
                        "data": {
                          "href": "https://github.com/dictyBase/migration-data/files/3220576/synthetic_medium.pdf"
                        },
                        "nodes": [
                          {
                            "object": "text",
                            "leaves": [
                              {
                                "object": "leaf",
                                "text": "Recipe for synthetic medium",
                                "marks": [
                                  {
                                    "object": "mark",
                                    "type": "font-size",
                                    "data": {
                                      "fontSizeIndex": 2
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": " (pdf) ",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          },
                          {
                            "object": "leaf",
                            "text": "(contributed by Erwin Flaschel)",
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
                                  "fontSizeIndex": 2
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
                    "type": "heading_3",
                    "data": {
                      "className": null
                    },
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
                                  "fontSizeIndex": 5
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
                    "type": "heading_3",
                    "data": {
                      "className": null
                    },
                    "nodes": [
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "Growth, development, and storage of ",
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
                                  "fontSizeIndex": 5
                                }
                              }
                            ]
                          },
                          {
                            "object": "leaf",
                            "text": "Dictyostelium",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "italic",
                                "data": {}
                              },
                              {
                                "object": "mark",
                                "type": "bold",
                                "data": {}
                              },
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 5
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
                    "type": "heading_3",
                    "data": {
                      "className": null
                    },
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
                                "type": "italic",
                                "data": {}
                              },
                              {
                                "object": "mark",
                                "type": "bold",
                                "data": {}
                              },
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 5
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "inline",
                        "type": "link",
                        "data": {
                          "href": "/techniques/growth"
                        },
                        "nodes": [
                          {
                            "object": "text",
                            "leaves": [
                              {
                                "object": "leaf",
                                "text": "Methods for growing ",
                                "marks": [
                                  {
                                    "object": "mark",
                                    "type": "font-size",
                                    "data": {
                                      "fontSizeIndex": 2
                                    }
                                  }
                                ]
                              },
                              {
                                "object": "leaf",
                                "text": "Dictyostelium",
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
                                      "fontSizeIndex": 2
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": " ",
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
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          },
                          {
                            "object": "leaf",
                            "text": "(",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          },
                          {
                            "object": "leaf",
                            "text": "Fey et al. 2007",
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
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          },
                          {
                            "object": "leaf",
                            "text": ")  ",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
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
                    "type": "heading_3",
                    "data": {
                      "className": null
                    },
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
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "inline",
                        "type": "link",
                        "data": {
                          "href": "/techniques/development"
                        },
                        "nodes": [
                          {
                            "object": "text",
                            "leaves": [
                              {
                                "object": "leaf",
                                "text": "Methods for ",
                                "marks": [
                                  {
                                    "object": "mark",
                                    "type": "font-size",
                                    "data": {
                                      "fontSizeIndex": 2
                                    }
                                  }
                                ]
                              },
                              {
                                "object": "leaf",
                                "text": "Dictyostelium",
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
                                      "fontSizeIndex": 2
                                    }
                                  }
                                ]
                              },
                              {
                                "object": "leaf",
                                "text": " development ",
                                "marks": [
                                  {
                                    "object": "mark",
                                    "type": "font-size",
                                    "data": {
                                      "fontSizeIndex": 2
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "(",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          },
                          {
                            "object": "leaf",
                            "text": "Fey et al. 2007",
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
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          },
                          {
                            "object": "leaf",
                            "text": ")  ",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
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
                    "type": "heading_3",
                    "data": {
                      "className": null
                    },
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
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "inline",
                        "type": "link",
                        "data": {
                          "href": "/research/techniques/dicty-storage"
                        },
                        "nodes": [
                          {
                            "object": "text",
                            "leaves": [
                              {
                                "object": "leaf",
                                "text": "Dictyostelium",
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
                                      "fontSizeIndex": 2
                                    }
                                  }
                                ]
                              },
                              {
                                "object": "leaf",
                                "text": " cell storage procedures",
                                "marks": [
                                  {
                                    "object": "mark",
                                    "type": "font-size",
                                    "data": {
                                      "fontSizeIndex": 2
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": " (",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          },
                          {
                            "object": "leaf",
                            "text": "Fey et al. 2007",
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
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          },
                          {
                            "object": "leaf",
                            "text": ")  ",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
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
                    "type": "heading_3",
                    "data": {
                      "className": null
                    },
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
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "inline",
                        "type": "link",
                        "data": {
                          "href": "/research/techniques/soft-agar"
                        },
                        "nodes": [
                          {
                            "object": "text",
                            "leaves": [
                              {
                                "object": "leaf",
                                "text": "Plating ",
                                "marks": [
                                  {
                                    "object": "mark",
                                    "type": "font-size",
                                    "data": {
                                      "fontSizeIndex": 2
                                    }
                                  }
                                ]
                              },
                              {
                                "object": "leaf",
                                "text": "Dictyostelium",
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
                                      "fontSizeIndex": 2
                                    }
                                  }
                                ]
                              },
                              {
                                "object": "leaf",
                                "text": " in soft agar",
                                "marks": [
                                  {
                                    "object": "mark",
                                    "type": "font-size",
                                    "data": {
                                      "fontSizeIndex": 2
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": " * ",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
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
                    "type": "heading_3",
                    "data": {
                      "className": null
                    },
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
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "inline",
                        "type": "link",
                        "data": {
                          "href": "https://github.com/dictyBase/migration-data/files/5922084/Thawing.cells.from.DMSO.stocks.docx"
                        },
                        "nodes": [
                          {
                            "object": "text",
                            "leaves": [
                              {
                                "object": "leaf",
                                "text": "Thawing cells from DMSO stocks",
                                "marks": [
                                  {
                                    "object": "mark",
                                    "type": "font-size",
                                    "data": {
                                      "fontSizeIndex": 2
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": " (contributed by Dave Knecht)",
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
                                  "fontSizeIndex": 2
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
                    "type": "heading_3",
                    "data": {
                      "className": null
                    },
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
                                  "fontSizeIndex": 5
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
                    "type": "heading_3",
                    "data": {
                      "className": null
                    },
                    "nodes": [
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "Sexual Genetics",
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
                                  "fontSizeIndex": 5
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
                    "type": "heading_3",
                    "data": {
                      "className": null
                    },
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
                                  "fontSizeIndex": 5
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "inline",
                        "type": "link",
                        "data": {
                          "href": "/research/techniques/parasexual-genetics"
                        },
                        "nodes": [
                          {
                            "object": "text",
                            "leaves": [
                              {
                                "object": "leaf",
                                "text": "Methods for parasexual genetics",
                                "marks": [
                                  {
                                    "object": "mark",
                                    "type": "font-size",
                                    "data": {
                                      "fontSizeIndex": 2
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": " ",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          },
                          {
                            "object": "leaf",
                            "text": "(contributed by Jason King and Robert Insall)",
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
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          },
                          {
                            "object": "leaf",
                            "text": " ",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
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
                    "type": "heading_3",
                    "data": {
                      "className": null
                    },
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
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "inline",
                        "type": "link",
                        "data": {
                          "href": "/research/techniques/mating-types"
                        },
                        "nodes": [
                          {
                            "object": "text",
                            "leaves": [
                              {
                                "object": "leaf",
                                "text": "Method for determining mating types",
                                "marks": [
                                  {
                                    "object": "mark",
                                    "type": "font-size",
                                    "data": {
                                      "fontSizeIndex": 2
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": " ",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          },
                          {
                            "object": "leaf",
                            "text": "(contributed by Jakob Franke)",
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
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          },
                          {
                            "object": "leaf",
                            "text": " ",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 2
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                              "fontSizeIndex": 5
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Molecular Biology",
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
                              "fontSizeIndex": 5
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                              "fontSizeIndex": 5
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "object": "inline",
                    "type": "link",
                    "data": {
                      "href": "/research/techniques/quick-genomic-dna-extraction"
                    },
                    "nodes": [
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "Quick extraction of genomic DNA",
                            "marks": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "(contributed by Steve Charette and Pierre Cosson) ",
                        "marks": [
                          {
                            "object": "mark",
                            "type": "italic",
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                            "type": "italic",
                            "data": {}
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "object": "inline",
                    "type": "link",
                    "data": {
                      "href": "/research/techniques/genomic-dna-extraction"
                    },
                    "nodes": [
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "Isolation of genomic DNA",
                            "marks": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " * ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                  },
                  {
                    "object": "inline",
                    "type": "link",
                    "data": {
                      "href": "/research/techniques/genomic-dna-extraction-csci"
                    },
                    "nodes": [
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "Isolation of genomic DNA with CsCl",
                            "marks": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " * ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                  },
                  {
                    "object": "inline",
                    "type": "link",
                    "data": {
                      "href": "/research/techniques/rt-pcr"
                    },
                    "nodes": [
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "RT-PCR for Knockout Screening and Expression Analysis",
                            "marks": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "(contributed by Robin Williams)",
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
                        "text": " ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                              "fontSizeIndex": 5
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Transformation",
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
                              "fontSizeIndex": 5
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                              "fontSizeIndex": 5
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "object": "inline",
                    "type": "link",
                    "data": {
                      "href": "/research/techniques/transformation-protocols"
                    },
                    "nodes": [
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "Transformation protocols",
                            "marks": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " (",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "Gaudet et al. 2007",
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
                        "text": ")  ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                  },
                  {
                    "object": "inline",
                    "type": "link",
                    "data": {
                      "href": "/research/techniques/calcium-phosphate-precipitation"
                    },
                    "nodes": [
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "Calcium phosphate precipitation",
                            "marks": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " * ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                  },
                  {
                    "object": "inline",
                    "type": "link",
                    "data": {
                      "href": "/research/techniques/electroporation"
                    },
                    "nodes": [
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "Electroporation",
                            "marks": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "(contributed by Dave Knecht) ",
                        "marks": [
                          {
                            "object": "mark",
                            "type": "italic",
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                            "type": "italic",
                            "data": {}
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "object": "inline",
                    "type": "link",
                    "data": {
                      "href": "/research/techniques/transformation-nc4"
                    },
                    "nodes": [
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "Transformation of NC4 or ",
                            "marks": []
                          },
                          {
                            "object": "leaf",
                            "text": "D. mucoroides",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "italic",
                                "data": {}
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " (contributed by Harry MacWilliams) ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Microinjection ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "(contributed by Yoshio Fukui)",
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
                        "text": "  ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Transformation by particle gun ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "(contributed by Birgit Wetterauer and Hans-Ulrich Koop) ",
                        "marks": [
                          {
                            "object": "mark",
                            "type": "italic",
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Addition of heat-killed bacteria to transformants * ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Transformant selection on bacterial lawns using the V18-Tn5-cassette ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "(contributed by Harry MacWilliams)",
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
                        "text": " ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                  },
                  {
                    "object": "inline",
                    "type": "link",
                    "data": {
                      "href": "/research/techniques/dapi-electroporation"
                    },
                    "nodes": [
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "DAPI Electroporation",
                            "marks": []
                          }
                        ]
                      }
                    ]
                  },
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                              "fontSizeIndex": 5
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Mutagenesis",
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
                              "fontSizeIndex": 5
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                              "fontSizeIndex": 5
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "object": "inline",
                    "type": "link",
                    "data": {
                      "href": "/research/techniques/remi-mutagenesis"
                    },
                    "nodes": [
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "Restriction-enzyme mediated insertional mutagenesis",
                            "marks": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " (REMI)",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                  },
                  {
                    "object": "inline",
                    "type": "link",
                    "data": {
                      "href": "/research/techniques/rnai-procedure"
                    },
                    "nodes": [
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "RNAi procedure",
                            "marks": []
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "(contributed by Alan Kimmel)",
                        "marks": [
                          {
                            "object": "mark",
                            "type": "italic",
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Making double mutants by diploid genetics ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "(contributed by Jason King and Robert Insall)",
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
                        "text": " ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                              "fontSizeIndex": 5
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Gene Expression",
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
                              "fontSizeIndex": 5
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Chromatin Immuno-precipitation ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "(contributed by Jeff Williams and Y. Yamada)",
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
                        "text": " ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Whole mount ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "in situ",
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
                        "text": " hybridization ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "(contributed by Ricardo Escalante and Bill Loomis)",
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
                        "text": " ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Agar overlay technique ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "(contributed by Yoshio Fukui)",
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
                        "text": " ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Indirect immunofluorescence * ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                              "fontSizeIndex": 5
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Microscopy",
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
                              "fontSizeIndex": 5
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Fixation techniques for immunonfluorescence ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "(contributed by Richard Gomer)",
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
                        "text": " ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Visualizing weak fluorescence in multicellular stages ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "(contributed by Harry MacWilliams)",
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
                        "text": " ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                              "fontSizeIndex": 5
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Biochemistry",
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
                              "fontSizeIndex": 5
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "S-methionine labelling of ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "Dictyostelium",
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
                        "text": "*",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "phosphate labelling of ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "Dictyostelium",
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
                        "text": "* ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                              "fontSizeIndex": 5
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "Cytoskeleton",
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
                              "fontSizeIndex": 5
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
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "Protein preparation",
                        "marks": [
                          {
                            "object": "mark",
                            "type": "bold",
                            "data": {}
                          }
                        ]
                      },
                      {
                        "object": "leaf",
                        "text": " ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "paragraph",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " Isolation of ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "Dictyostelium",
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
                        "text": " cytoskeleton *",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "paragraph",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " Isolation of ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "Dictyostelium",
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
                        "text": " centrosomes ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "(contributed by Ralph Gräf)",
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
                        "text": " ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "paragraph",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " Preparation of microtubule-associated motor proteins *",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "paragraph",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " Purification of muscle actin *",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "paragraph",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " One-day ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "Dictyostelium",
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
                        "text": " myosin preparation *",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "paragraph",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " Three-day ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "Dictyostelium",
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
                        "text": " myosin preparation * ",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "paragraph",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " Dictyostelium",
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
                        "text": " cell staining for tubulin ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "(contributed by Emma Dalton)",
                        "marks": [
                          {
                            "object": "mark",
                            "type": "italic",
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
                "type": "line-spacing",
                "data": {
                  "size": "1.0"
                },
                "nodes": [
                  {
                    "object": "block",
                    "type": "paragraph",
                    "data": {
                      "className": null
                    },
                    "nodes": [
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "  ",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 0
                                }
                              }
                            ]
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
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " Protein assays",
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
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " Microtubule gliding assay for microtubule-associated motors *",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "paragraph",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " ATPase assay for dynein (radioactive) *",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "paragraph",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " CTPase assay for dynein (colorimetric) *",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "paragraph",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "  ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "in vitro",
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
                        "text": " motility assay *",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "paragraph",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " ATPase assay for ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "Dictyostelium",
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
                        "text": " myosin *",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "paragraph",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " Estimation of the number of active myosin heads in isolated myosin *",
                        "marks": []
                      }
                    ]
                  }
                ]
              },
              {
                "object": "block",
                "type": "paragraph",
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " Myosin-F-actin binding by pelleting assay *",
                        "marks": []
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
                    "data": {
                      "className": null
                    },
                    "nodes": [
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "   ",
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
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " Protein detection",
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
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": " Dictyostelium",
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
                        "text": " anti-γ-tubulin Westerns ",
                        "marks": []
                      },
                      {
                        "object": "leaf",
                        "text": "(contributed by Emma Dalton)",
                        "marks": [
                          {
                            "object": "mark",
                            "type": "italic",
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                            "type": "font-size",
                            "data": {
                              "fontSizeIndex": 5
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
                "type": "heading_3",
                "data": {
                  "className": null
                },
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
                            "type": "font-size",
                            "data": {
                              "fontSizeIndex": 5
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "object": "inline",
                    "type": "link",
                    "data": {
                      "href": "/explore/teach"
                    },
                    "nodes": [
                      {
                        "object": "text",
                        "leaves": [
                          {
                            "object": "leaf",
                            "text": "Teaching Tools",
                            "marks": [
                              {
                                "object": "mark",
                                "type": "font-size",
                                "data": {
                                  "fontSizeIndex": 5
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "",
                        "marks": [
                          {
                            "object": "mark",
                            "type": "font-size",
                            "data": {
                              "fontSizeIndex": 5
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
                "data": {
                  "className": null
                },
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
                            "type": "italic",
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
                "data": {
                  "className": null
                },
                "nodes": [
                  {
                    "object": "text",
                    "leaves": [
                      {
                        "object": "leaf",
                        "text": "* This experimental protocol was taken from the Rex Chisholm Lab's Dictyostelium Techniques Manual. Many of these protocols are the result of the contributions and collaborations of many different laboratories. ",
                        "marks": [
                          {
                            "object": "mark",
                            "type": "bold",
                            "data": {}
                          },
                          {
                            "object": "mark",
                            "type": "italic",
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
        ]
      }
    ]
  }
}

export { newContent, oldContent, order, art, techniques };
