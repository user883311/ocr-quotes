/* This module is not in use anymore. 
It transforms a XML string into a JSON Object. */

// const importXml = require("./importXML");
const jsonHocrObject = {
    "_declaration": {
        "_attributes": {
            "version": "1.0",
            "encoding": "UTF-8"
        }
    },
    "_doctype": "html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n    \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"",
    "html": {
        "_attributes": {
            "xmlns": "http://www.w3.org/1999/xhtml",
            "xml:lang": "en",
            "lang": "en"
        },
        "head": {
            "title": {},
            "meta": [{
                    "_attributes": {
                        "http-equiv": "Content-Type",
                        "content": "text/html;charset=utf-8"
                    }
                },
                {
                    "_attributes": {
                        "name": "ocr-system",
                        "content": "tesseract 3.05.01"
                    }
                },
                {
                    "_attributes": {
                        "name": "ocr-capabilities",
                        "content": "ocr_page ocr_carea ocr_par ocr_line ocrx_word"
                    }
                }
            ]
        },
        "body": {
            "div": {
                "_attributes": {
                    "class": "ocr_page",
                    "id": "page_1",
                    "title": "image \"IMG_4938.jpg\"; bbox 0 0 4032 3024; ppageno 0"
                },
                "div": [{
                        "_attributes": {
                            "class": "ocr_carea",
                            "id": "block_1_1",
                            "title": "bbox 400 0 3726 199"
                        },
                        "p": {
                            "_attributes": {
                                "class": "ocr_par",
                                "id": "par_1_1",
                                "lang": "eng",
                                "title": "bbox 400 0 3726 199"
                            },
                            "span": [{
                                    "_attributes": {
                                        "class": "ocr_line",
                                        "id": "line_1_1",
                                        "title": "bbox 952 0 3714 53; baseline 0.026 -71; x_size 68; x_descenders 15; x_ascenders 23"
                                    },
                                    "span": [{
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_1",
                                                "title": "bbox 952 0 1001 10; x_wconf 53"
                                            },
                                            "strong": {
                                                "_text": "v"
                                            }
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_2",
                                                "title": "bbox 1337 0 1366 14; x_wconf 48"
                                            },
                                            "strong": {
                                                "em": {
                                                    "_text": "‘"
                                                }
                                            }
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_3",
                                                "title": "bbox 1402 0 1430 16; x_wconf 42"
                                            },
                                            "strong": {
                                                "_text": "A"
                                            }
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_4",
                                                "title": "bbox 1727 0 1764 3; x_wconf 24"
                                            },
                                            "_text": "V."
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_5",
                                                "title": "bbox 1803 0 2121 27; x_wconf 68"
                                            },
                                            "_text": "------....,"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_6",
                                                "title": "bbox 2163 0 2308 36; x_wconf 48"
                                            },
                                            "_text": "r.”"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_7",
                                                "title": "bbox 2328 0 2922 50; x_wconf 55"
                                            },
                                            "_text": "vuuxvsxuauy."
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_8",
                                                "title": "bbox 2967 0 3079 36; x_wconf 68"
                                            },
                                            "_text": "we"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_9",
                                                "title": "bbox 3118 0 3410 44; x_wconf 65"
                                            },
                                            "_text": "CUTLTLOI"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_10",
                                                "title": "bbox 3444 0 3714 53; x_wconf 75"
                                            },
                                            "_text": "mvent"
                                        }
                                    ]
                                },
                                {
                                    "_attributes": {
                                        "class": "ocr_line",
                                        "id": "line_1_2",
                                        "title": "bbox 400 68 3726 199; baseline 0.015 -51; x_size 97; x_descenders 19; x_ascenders 27"
                                    },
                                    "span": [{
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_11",
                                                "title": "bbox 400 100 551 156; x_wconf 81"
                                            },
                                            "_text": "our"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_12",
                                                "title": "bbox 587 96 768 149; x_wconf 78"
                                            },
                                            "_text": "own"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_13",
                                                "title": "bbox 812 68 1119 162; x_wconf 74"
                                            },
                                            "_text": "values,"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_14",
                                                "title": "bbox 1170 70 1510 153; x_wconf 86"
                                            },
                                            "_text": "because"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_15",
                                                "title": "bbox 1552 104 1670 156; x_wconf 79"
                                            },
                                            "_text": "we"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_16",
                                                "title": "bbox 1711 106 2017 164; x_wconf 82"
                                            },
                                            "_text": "cannot"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_17",
                                                "title": "bbox 2055 92 2343 188; x_wconf 83"
                                            },
                                            "_text": "merely"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_18",
                                                "title": "bbox 2383 95 2677 193; x_wconf 79"
                                            },
                                            "_text": "impose"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_19",
                                                "title": "bbox 2716 104 2936 183; x_wconf 82"
                                            },
                                            "_text": "what"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_20",
                                                "title": "bbox 2971 134 3085 185; x_wconf 83"
                                            },
                                            "_text": "we"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_21",
                                                "title": "bbox 3125 110 3408 191; x_wconf 78"
                                            },
                                            "_text": "believe"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_22",
                                                "title": "bbox 3446 143 3546 195; x_wconf 85"
                                            },
                                            "_text": "on"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_23",
                                                "title": "bbox 3585 148 3726 199; x_wconf 83"
                                            },
                                            "_text": "our"
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "_attributes": {
                            "class": "ocr_carea",
                            "id": "block_1_2",
                            "title": "bbox 343 224 3814 1948"
                        },
                        "p": [{
                                "_attributes": {
                                    "class": "ocr_par",
                                    "id": "par_1_2",
                                    "lang": "eng",
                                    "title": "bbox 388 224 3740 654"
                                },
                                "span": [{
                                        "_attributes": {
                                            "class": "ocr_line",
                                            "id": "line_1_3",
                                            "title": "bbox 392 224 3731 364; baseline 0.011 -53; x_size 93; x_descenders 14; x_ascenders 25"
                                        },
                                        "span": [{
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_24",
                                                    "title": "bbox 392 229 629 311; x_wconf 82"
                                                },
                                                "_text": "souls."
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_25",
                                                    "title": "bbox 684 224 914 302; x_wconf 88"
                                                },
                                                "strong": {
                                                    "_text": "This"
                                                }
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_26",
                                                    "title": "bbox 962 250 1144 304; x_wconf 85"
                                                },
                                                "_text": "was"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_27",
                                                    "title": "bbox 1199 227 1413 308; x_wconf 88"
                                                },
                                                "_text": "Carl"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_28",
                                                    "title": "bbox 1455 232 1763 333; x_wconf 84"
                                                },
                                                "_text": "Jung’s"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_29",
                                                    "title": "bbox 1811 259 2058 337; x_wconf 89"
                                                },
                                                "_text": "great"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_30",
                                                    "title": "bbox 2104 243 2940 347; x_wconf 81"
                                                },
                                                "_text": "discovery—made"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_31",
                                                    "title": "bbox 2985 257 3079 335; x_wconf 93"
                                                },
                                                "_text": "in"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_32",
                                                    "title": "bbox 3121 284 3237 337; x_wconf 89"
                                                },
                                                "_text": "no"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_33",
                                                    "title": "bbox 3282 262 3496 343; x_wconf 90"
                                                },
                                                "_text": "little"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_34",
                                                    "title": "bbox 3538 289 3731 364; x_wconf 90"
                                                },
                                                "_text": "part"
                                            }
                                        ]
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocr_line",
                                            "id": "line_1_4",
                                            "title": "bbox 388 381 3545 507; baseline 0.009 -41; x_size 103; x_descenders 21; x_ascenders 28"
                                        },
                                        "span": [{
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_35",
                                                    "title": "bbox 388 389 771 467; x_wconf 84"
                                                },
                                                "_text": "because"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_36",
                                                    "title": "bbox 810 381 916 461; x_wconf 89"
                                                },
                                                "_text": "of"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_37",
                                                    "title": "bbox 936 382 1077 462; x_wconf 91"
                                                },
                                                "_text": "his"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_38",
                                                    "title": "bbox 1116 383 1469 468; x_wconf 91"
                                                },
                                                "_text": "intense"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_39",
                                                    "title": "bbox 1508 392 1775 493; x_wconf 90"
                                                },
                                                "_text": "study"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_40",
                                                    "title": "bbox 1809 395 1912 475; x_wconf 91"
                                                },
                                                "_text": "of"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_41",
                                                    "title": "bbox 1934 396 2086 478; x_wconf 87"
                                                },
                                                "_text": "the"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_42",
                                                    "title": "bbox 2120 401 2566 499; x_wconf 90"
                                                },
                                                "_text": "problems"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_43",
                                                    "title": "bbox 2600 408 2881 504; x_wconf 92"
                                                },
                                                "_text": "posed"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_44",
                                                    "title": "bbox 2911 408 3025 507; x_wconf 93"
                                                },
                                                "_text": "by"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_45",
                                                    "title": "bbox 3054 412 3545 496; x_wconf 89"
                                                },
                                                "_text": "Nietzsche."
                                            }
                                        ]
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocr_line",
                                            "id": "line_1_5",
                                            "title": "bbox 572 541 3740 654; baseline 0.01 -36; x_size 98; x_descenders 18; x_ascenders 25"
                                        },
                                        "span": [{
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_46",
                                                    "title": "bbox 572 542 727 621; x_wconf 94"
                                                },
                                                "_text": "We"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_47",
                                                    "title": "bbox 758 541 996 621; x_wconf 91"
                                                },
                                                "_text": "rebel"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_48",
                                                    "title": "bbox 1030 544 1374 643; x_wconf 91"
                                                },
                                                "_text": "against"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_49",
                                                    "title": "bbox 1404 573 1570 628; x_wconf 86"
                                                },
                                                "_text": "our"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_50",
                                                    "title": "bbox 1598 576 1802 632; x_wconf 93"
                                                },
                                                "_text": "own"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_51",
                                                    "title": "bbox 1829 556 2551 654; x_wconf 81"
                                                },
                                                "_text": "totalitarianism,"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_52",
                                                    "title": "bbox 2584 586 2673 640; x_wconf 91"
                                                },
                                                "_text": "as"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_53",
                                                    "title": "bbox 2702 563 2966 642; x_wconf 88"
                                                },
                                                "_text": "much"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_54",
                                                    "title": "bbox 2996 589 3084 643; x_wconf 89"
                                                },
                                                "_text": "as"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_55",
                                                    "title": "bbox 3112 565 3296 644; x_wconf 85"
                                                },
                                                "_text": "that"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_56",
                                                    "title": "bbox 3323 567 3419 646; x_wconf 92"
                                                },
                                                "_text": "of"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_57",
                                                    "title": "bbox 3437 570 3740 650; x_wconf 89"
                                                },
                                                "_text": "others."
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "_attributes": {
                                    "class": "ocr_par",
                                    "id": "par_1_3",
                                    "lang": "eng",
                                    "title": "bbox 343 703 3814 1948"
                                },
                                "span": [{
                                        "_attributes": {
                                            "class": "ocr_line",
                                            "id": "line_1_6",
                                            "title": "bbox 377 703 3751 823; baseline 0.006 -39; x_size 98; x_descenders 17; x_ascenders 26"
                                        },
                                        "span": [{
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_58",
                                                    "title": "bbox 377 706 414 784; x_wconf 92"
                                                },
                                                "_text": "I"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_59",
                                                    "title": "bbox 445 719 780 783; x_wconf 90"
                                                },
                                                "_text": "cannot"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_60",
                                                    "title": "bbox 808 703 1142 804; x_wconf 91"
                                                },
                                                "_text": "merely"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_61",
                                                    "title": "bbox 1170 706 1433 787; x_wconf 91"
                                                },
                                                "_text": "order"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_62",
                                                    "title": "bbox 1458 711 1784 810; x_wconf 92"
                                                },
                                                "_text": "myself"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_63",
                                                    "title": "bbox 1798 730 1890 793; x_wconf 93"
                                                },
                                                "_text": "to"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_64",
                                                    "title": "bbox 1921 715 2240 811; x_wconf 80"
                                                },
                                                "_text": "action,"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_65",
                                                    "title": "bbox 2273 716 2448 797; x_wconf 91"
                                                },
                                                "_text": "and"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_66",
                                                    "title": "bbox 2474 717 2808 799; x_wconf 91"
                                                },
                                                "_text": "neither"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_67",
                                                    "title": "bbox 2835 743 3000 798; x_wconf 87"
                                                },
                                                "_text": "can"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_68",
                                                    "title": "bbox 3023 744 3218 818; x_wconf 91"
                                                },
                                                "_text": "you."
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_69",
                                                    "title": "bbox 3254 721 3345 799; x_wconf 91"
                                                },
                                                "_text": "“I"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_70",
                                                    "title": "bbox 3369 722 3539 801; x_wconf 88"
                                                },
                                                "_text": "will"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_71",
                                                    "title": "bbox 3566 741 3751 823; x_wconf 89"
                                                },
                                                "_text": "stop"
                                            }
                                        ]
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocr_line",
                                            "id": "line_1_7",
                                            "title": "bbox 369 860 3762 976; baseline 0.004 -32; x_size 103; x_descenders 21; x_ascenders 28"
                                        },
                                        "span": [{
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_72",
                                                    "title": "bbox 369 860 1235 966; x_wconf 80"
                                                },
                                                "_text": "procrastinating,”"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_73",
                                                    "title": "bbox 1282 867 1320 946; x_wconf 97"
                                                },
                                                "_text": "I"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_74",
                                                    "title": "bbox 1364 893 1540 969; x_wconf 80"
                                                },
                                                "_text": "say,"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_75",
                                                    "title": "bbox 1582 869 1748 952; x_wconf 92"
                                                },
                                                "_text": "but"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_76",
                                                    "title": "bbox 1788 872 1826 951; x_wconf 96"
                                                },
                                                "_text": "I"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_77",
                                                    "title": "bbox 1868 872 2145 954; x_wconf 82"
                                                },
                                                "_text": "don’t."
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_78",
                                                    "title": "bbox 2195 874 2289 954; x_wconf 92"
                                                },
                                                "_text": "“I"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_79",
                                                    "title": "bbox 2326 875 2505 955; x_wconf 92"
                                                },
                                                "_text": "will"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_80",
                                                    "title": "bbox 2547 893 2686 956; x_wconf 90"
                                                },
                                                "_text": "eat"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_81",
                                                    "title": "bbox 2723 875 3200 976; x_wconf 84"
                                                },
                                                "_text": "properly,”"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_82",
                                                    "title": "bbox 3244 877 3282 955; x_wconf 94"
                                                },
                                                "_text": "I"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_83",
                                                    "title": "bbox 3322 902 3490 976; x_wconf 84"
                                                },
                                                "_text": "say,"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_84",
                                                    "title": "bbox 3528 878 3689 957; x_wconf 91"
                                                },
                                                "_text": "but"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_85",
                                                    "title": "bbox 3724 879 3762 956; x_wconf 94"
                                                },
                                                "_text": "I"
                                            }
                                        ]
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocr_line",
                                            "id": "line_1_8",
                                            "title": "bbox 369 1025 3772 1134; baseline 0.001 -26; x_size 99; x_descenders 17; x_ascenders 27"
                                        },
                                        "span": [{
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_86",
                                                    "title": "bbox 369 1025 650 1108; x_wconf 88"
                                                },
                                                "_text": "don’t."
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_87",
                                                    "title": "bbox 689 1025 785 1105; x_wconf 89"
                                                },
                                                "_text": "“I"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_88",
                                                    "title": "bbox 811 1025 997 1106; x_wconf 93"
                                                },
                                                "_text": "Will"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_89",
                                                    "title": "bbox 1027 1026 1210 1108; x_wconf 90"
                                                },
                                                "_text": "end"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_90",
                                                    "title": "bbox 1236 1053 1391 1130; x_wconf 90"
                                                },
                                                "_text": "my"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_91",
                                                    "title": "bbox 1416 1028 1842 1111; x_wconf 88"
                                                },
                                                "_text": "drunken"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_92",
                                                    "title": "bbox 1866 1032 2537 1129; x_wconf 82"
                                                },
                                                "_text": "misbehavior,”"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_93",
                                                    "title": "bbox 2566 1034 2605 1113; x_wconf 95"
                                                },
                                                "_text": "I"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_94",
                                                    "title": "bbox 2631 1058 2801 1134; x_wconf 82"
                                                },
                                                "_text": "say,"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_95",
                                                    "title": "bbox 2826 1034 2989 1114; x_wconf 92"
                                                },
                                                "_text": "but"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_96",
                                                    "title": "bbox 3012 1034 3051 1113; x_wconf 95"
                                                },
                                                "_text": "I"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_97",
                                                    "title": "bbox 3077 1033 3350 1114; x_wconf 84"
                                                },
                                                "_text": "don’t."
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_98",
                                                    "title": "bbox 3379 1034 3419 1112; x_wconf 92"
                                                },
                                                "_text": "I"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_99",
                                                    "title": "bbox 3444 1052 3772 1114; x_wconf 86"
                                                },
                                                "_text": "cannot"
                                            }
                                        ]
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocr_line",
                                            "id": "line_1_9",
                                            "title": "bbox 362 1187 3782 1293; baseline -0.001 -23; x_size 101; x_descenders 19; x_ascenders 27"
                                        },
                                        "span": [{
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_100",
                                                    "title": "bbox 362 1187 707 1290; x_wconf 87"
                                                },
                                                "_text": "merely"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_101",
                                                    "title": "bbox 752 1187 1029 1269; x_wconf 87"
                                                },
                                                "_text": "make"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_102",
                                                    "title": "bbox 1078 1189 1424 1291; x_wconf 89"
                                                },
                                                "_text": "myself"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_103",
                                                    "title": "bbox 1460 1216 1673 1273; x_wconf 91"
                                                },
                                                "_text": "over"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_104",
                                                    "title": "bbox 1718 1190 1815 1271; x_wconf 92"
                                                },
                                                "_text": "in"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_105",
                                                    "title": "bbox 1859 1191 2015 1272; x_wconf 88"
                                                },
                                                "_text": "the"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_106",
                                                    "title": "bbox 2062 1191 2357 1293; x_wconf 91"
                                                },
                                                "_text": "image"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_107",
                                                    "title": "bbox 2406 1191 2992 1273; x_wconf 84"
                                                },
                                                "_text": "constructed"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_108",
                                                    "title": "bbox 3033 1191 3152 1290; x_wconf 91"
                                                },
                                                "_text": "by"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_109",
                                                    "title": "bbox 3195 1216 3343 1290; x_wconf 88"
                                                },
                                                "_text": "my"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_110",
                                                    "title": "bbox 3387 1189 3782 1270; x_wconf 88"
                                                },
                                                "_text": "intellect"
                                            }
                                        ]
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocr_line",
                                            "id": "line_1_10",
                                            "title": "bbox 366 1347 3789 1457; baseline -0.002 -22; x_size 104; x_descenders 22; x_ascenders 27"
                                        },
                                        "span": [{
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_111",
                                                    "title": "bbox 366 1351 1018 1457; x_wconf 88"
                                                },
                                                "_text": "(particularly"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_112",
                                                    "title": "bbox 1064 1350 1146 1432; x_wconf 89"
                                                },
                                                "_text": "if"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_113",
                                                    "title": "bbox 1181 1351 1386 1434; x_wconf 86"
                                                },
                                                "_text": "that"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_114",
                                                    "title": "bbox 1432 1351 1841 1433; x_wconf 89"
                                                },
                                                "_text": "intellect"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_115",
                                                    "title": "bbox 1886 1351 1959 1432; x_wconf 91"
                                                },
                                                "_text": "is"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_116",
                                                    "title": "bbox 2006 1351 2490 1453; x_wconf 89"
                                                },
                                                "_text": "possessed"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_117",
                                                    "title": "bbox 2532 1350 2651 1452; x_wconf 93"
                                                },
                                                "_text": "by"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_118",
                                                    "title": "bbox 2697 1375 2814 1431; x_wconf 90"
                                                },
                                                "_text": "an"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_119",
                                                    "title": "bbox 2859 1349 3338 1450; x_wconf 88"
                                                },
                                                "_text": "ideology)."
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_120",
                                                    "title": "bbox 3389 1348 3429 1428; x_wconf 92"
                                                },
                                                "_text": "I"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_121",
                                                    "title": "bbox 3470 1347 3693 1428; x_wconf 91"
                                                },
                                                "_text": "have"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_122",
                                                    "title": "bbox 3742 1372 3789 1427; x_wconf 94"
                                                },
                                                "_text": "a"
                                            }
                                        ]
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocr_line",
                                            "id": "line_1_11",
                                            "title": "bbox 351 1507 3796 1617; baseline -0.004 -16; x_size 98; x_descenders 15; x_ascenders 27"
                                        },
                                        "span": [{
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_123",
                                                    "title": "bbox 351 1537 718 1615; x_wconf 84"
                                                },
                                                "_text": "nature,"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_124",
                                                    "title": "bbox 754 1515 944 1600; x_wconf 91"
                                                },
                                                "_text": "and"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_125",
                                                    "title": "bbox 975 1542 1079 1598; x_wconf 91"
                                                },
                                                "_text": "so"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_126",
                                                    "title": "bbox 1111 1514 1236 1597; x_wconf 90"
                                                },
                                                "_text": "do"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_127",
                                                    "title": "bbox 1263 1540 1478 1617; x_wconf 81"
                                                },
                                                "_text": "you,"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_128",
                                                    "title": "bbox 1513 1512 1697 1596; x_wconf 91"
                                                },
                                                "_text": "and"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_129",
                                                    "title": "bbox 1727 1538 1828 1595; x_wconf 89"
                                                },
                                                "_text": "so"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_130",
                                                    "title": "bbox 1858 1512 1977 1594; x_wconf 90"
                                                },
                                                "_text": "do"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_131",
                                                    "title": "bbox 2005 1537 2137 1594; x_wconf 90"
                                                },
                                                "_text": "we"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_132",
                                                    "title": "bbox 2168 1511 2309 1594; x_wconf 93"
                                                },
                                                "_text": "all."
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_133",
                                                    "title": "bbox 2339 1511 2496 1592; x_wconf 91"
                                                },
                                                "_text": "We"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_134",
                                                    "title": "bbox 2523 1527 2767 1592; x_wconf 91"
                                                },
                                                "_text": "must"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_135",
                                                    "title": "bbox 2794 1509 3200 1591; x_wconf 88"
                                                },
                                                "_text": "discover"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_136",
                                                    "title": "bbox 3224 1507 3421 1589; x_wconf 89"
                                                },
                                                "_text": "that"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_137",
                                                    "title": "bbox 3445 1525 3796 1601; x_wconf 76"
                                                },
                                                "_text": "nature,"
                                            }
                                        ]
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocr_line",
                                            "id": "line_1_12",
                                            "title": "bbox 350 1665 3805 1776; baseline -0.006 -8; x_size 100; x_descenders 16; x_ascenders 28"
                                        },
                                        "span": [{
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_138",
                                                    "title": "bbox 350 1684 536 1768; x_wconf 91"
                                                },
                                                "_text": "and"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_139",
                                                    "title": "bbox 578 1680 994 1767; x_wconf 89"
                                                },
                                                "_text": "contend"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_140",
                                                    "title": "bbox 1030 1678 1261 1763; x_wconf 92"
                                                },
                                                "_text": "with"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_141",
                                                    "title": "bbox 1299 1678 1398 1776; x_wconf 83"
                                                },
                                                "_text": "it,"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_142",
                                                    "title": "bbox 1438 1675 1753 1759; x_wconf 86"
                                                },
                                                "_text": "before"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_143",
                                                    "title": "bbox 1791 1673 2167 1775; x_wconf 87"
                                                },
                                                "_text": "making"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_144",
                                                    "title": "bbox 2200 1697 2476 1775; x_wconf 89"
                                                },
                                                "_text": "peace"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_145",
                                                    "title": "bbox 2511 1669 2733 1753; x_wconf 90"
                                                },
                                                "_text": "with"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_146",
                                                    "title": "bbox 2768 1668 3250 1752; x_wconf 90"
                                                },
                                                "_text": "ourselves."
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_147",
                                                    "title": "bbox 3287 1667 3566 1749; x_wconf 93"
                                                },
                                                "_text": "What"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_148",
                                                    "title": "bbox 3600 1665 3671 1747; x_wconf 90"
                                                },
                                                "_text": "is"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_149",
                                                    "title": "bbox 3707 1665 3805 1762; x_wconf 79"
                                                },
                                                "_text": "it,"
                                            }
                                        ]
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocr_line",
                                            "id": "line_1_13",
                                            "title": "bbox 343 1828 3814 1948; baseline -0.008 -11; x_size 107; x_descenders 22; x_ascenders 27"
                                        },
                                        "span": [{
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_150",
                                                    "title": "bbox 343 1852 547 1936; x_wconf 88"
                                                },
                                                "_text": "that"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_151",
                                                    "title": "bbox 585 1877 723 1935; x_wconf 91"
                                                },
                                                "_text": "we"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_152",
                                                    "title": "bbox 765 1865 1020 1932; x_wconf 91"
                                                },
                                                "_text": "most"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_153",
                                                    "title": "bbox 1059 1843 1313 1948; x_wconf 90"
                                                },
                                                "_text": "truly"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_154",
                                                    "title": "bbox 1352 1840 1551 1926; x_wconf 82"
                                                },
                                                "_text": "are?"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_155",
                                                    "title": "bbox 1589 1838 1869 1922; x_wconf 92"
                                                },
                                                "_text": "What"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_156",
                                                    "title": "bbox 1907 1836 1980 1919; x_wconf 89"
                                                },
                                                "_text": "is"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_157",
                                                    "title": "bbox 2021 1836 2088 1918; x_wconf 95"
                                                },
                                                "_text": "it"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_158",
                                                    "title": "bbox 2124 1834 2322 1918; x_wconf 92"
                                                },
                                                "_text": "that"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_159",
                                                    "title": "bbox 2357 1859 2490 1916; x_wconf 90"
                                                },
                                                "_text": "we"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_160",
                                                    "title": "bbox 2532 1830 2806 1915; x_wconf 89"
                                                },
                                                "_text": "could"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_161",
                                                    "title": "bbox 2842 1849 3086 1915; x_wconf 89"
                                                },
                                                "_text": "most"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_162",
                                                    "title": "bbox 3122 1829 3364 1932; x_wconf 89"
                                                },
                                                "_text": "truly"
                                            },
                                            {
                                                "_attributes": {
                                                    "class": "ocrx_word",
                                                    "id": "word_1_163",
                                                    "title": "bbox 3398 1828 3814 1924; x_wconf 79"
                                                },
                                                "_text": "become,"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "_attributes": {
                            "class": "ocr_carea",
                            "id": "block_1_3",
                            "title": "bbox 334 1988 3837 2296"
                        },
                        "p": {
                            "_attributes": {
                                "class": "ocr_par",
                                "id": "par_1_4",
                                "lang": "eng",
                                "title": "bbox 334 1988 3837 2296"
                            },
                            "span": [{
                                    "_attributes": {
                                        "class": "ocr_line",
                                        "id": "line_1_14",
                                        "title": "bbox 339 1988 3837 2125; baseline -0.01 -17; x_size 103; x_descenders 18; x_ascenders 27"
                                    },
                                    "span": [{
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_164",
                                                "title": "bbox 339 2019 790 2125; x_wconf 88"
                                            },
                                            "_text": "knowing"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_165",
                                                "title": "bbox 828 2015 1043 2102; x_wconf 90"
                                            },
                                            "_text": "who"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_166",
                                                "title": "bbox 1086 2039 1225 2098; x_wconf 92"
                                            },
                                            "_text": "we"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_167",
                                                "title": "bbox 1267 2026 1518 2094; x_wconf 91"
                                            },
                                            "_text": "most"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_168",
                                                "title": "bbox 1557 2003 1805 2108; x_wconf 86"
                                            },
                                            "_text": "truly"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_169",
                                                "title": "bbox 1845 2000 2040 2086; x_wconf 83"
                                            },
                                            "_text": "are?"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_170",
                                                "title": "bbox 2077 1999 2237 2083; x_wconf 87"
                                            },
                                            "_text": "We"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_171",
                                                "title": "bbox 2278 2015 2525 2081; x_wconf 88"
                                            },
                                            "_text": "must"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_172",
                                                "title": "bbox 2563 2014 2713 2100; x_wconf 90"
                                            },
                                            "_text": "get"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_173",
                                                "title": "bbox 2749 2014 2845 2079; x_wconf 91"
                                            },
                                            "_text": "to"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_174",
                                                "title": "bbox 2885 1994 3043 2079; x_wconf 94"
                                            },
                                            "_text": "the"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_175",
                                                "title": "bbox 3080 2019 3294 2098; x_wconf 84"
                                            },
                                            "_text": "very"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_176",
                                                "title": "bbox 3329 1992 3695 2076; x_wconf 87"
                                            },
                                            "_text": "bottom"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_177",
                                                "title": "bbox 3735 1988 3837 2073; x_wconf 87"
                                            },
                                            "_text": "of"
                                        }
                                    ]
                                },
                                {
                                    "_attributes": {
                                        "class": "ocr_line",
                                        "id": "line_1_15",
                                        "title": "bbox 334 2159 3000 2296; baseline -0.012 -19; x_size 111; x_descenders 24; x_ascenders 27"
                                    },
                                    "span": [{
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_178",
                                                "title": "bbox 334 2190 656 2296; x_wconf 89"
                                            },
                                            "_text": "things"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_179",
                                                "title": "bbox 696 2185 1023 2273; x_wconf 90"
                                            },
                                            "_text": "before"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_180",
                                                "title": "bbox 1064 2179 1298 2267; x_wconf 89"
                                            },
                                            "_text": "such"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_181",
                                                "title": "bbox 1337 2172 1820 2284; x_wconf 90"
                                            },
                                            "_text": "questions"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_182",
                                                "title": "bbox 1860 2193 2036 2253; x_wconf 88"
                                            },
                                            "_text": "can"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_183",
                                                "title": "bbox 2068 2164 2186 2249; x_wconf 92"
                                            },
                                            "_text": "be"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_184",
                                                "title": "bbox 2221 2162 2466 2267; x_wconf 87"
                                            },
                                            "_text": "truly"
                                        },
                                        {
                                            "_attributes": {
                                                "class": "ocrx_word",
                                                "id": "word_1_185",
                                                "title": "bbox 2501 2159 3000 2246; x_wconf 89"
                                            },
                                            "_text": "answered."
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "_attributes": {
                            "class": "ocr_carea",
                            "id": "block_1_4",
                            "title": "bbox 2590 2415 2654 2449"
                        },
                        "p": {
                            "_attributes": {
                                "class": "ocr_par",
                                "id": "par_1_5",
                                "lang": "eng",
                                "title": "bbox 2590 2415 2654 2449"
                            },
                            "span": {
                                "_attributes": {
                                    "class": "ocr_line",
                                    "id": "line_1_16",
                                    "title": "bbox 2590 2415 2654 2449; baseline -0.016 -28; x_size 36.25; x_descenders 9.0625; x_ascenders 9.0625"
                                },
                                "span": [{
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_186",
                                            "title": "bbox 2590 2421 2609 2449; x_wconf 47"
                                        },
                                        "strong": {
                                            "_text": "‘"
                                        }
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_187",
                                            "title": "bbox 2647 2415 2654 2420; x_wconf 85"
                                        },
                                        "strong": {
                                            "em": {
                                                "_text": "."
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "_attributes": {
                            "class": "ocr_carea",
                            "id": "block_1_5",
                            "title": "bbox 328 2588 1670 2695"
                        },
                        "p": {
                            "_attributes": {
                                "class": "ocr_par",
                                "id": "par_1_6",
                                "lang": "eng",
                                "title": "bbox 328 2588 1670 2695"
                            },
                            "span": {
                                "_attributes": {
                                    "class": "ocr_line",
                                    "id": "line_1_17",
                                    "title": "bbox 328 2588 1670 2695; baseline -0.016 -10; x_size 92.394958; x_descenders 12.394958; x_ascenders 21"
                                },
                                "span": [{
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_188",
                                            "title": "bbox 328 2606 653 2695; x_wconf 86"
                                        },
                                        "_text": "Doubt."
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_189",
                                            "title": "bbox 697 2604 919 2683; x_wconf 86"
                                        },
                                        "_text": "Past"
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_190",
                                            "title": "bbox 960 2599 1212 2679; x_wconf 85"
                                        },
                                        "_text": "Mere"
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_191",
                                            "title": "bbox 1253 2588 1670 2673; x_wconf 89"
                                        },
                                        "_text": "Nihilism"
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "_attributes": {
                            "class": "ocr_carea",
                            "id": "block_1_6",
                            "title": "bbox 3104 2476 4032 3024"
                        },
                        "p": {
                            "_attributes": {
                                "class": "ocr_par",
                                "id": "par_1_7",
                                "lang": "eng",
                                "title": "bbox 3104 2476 4032 3024"
                            },
                            "span": [{
                                    "_attributes": {
                                        "class": "ocr_line",
                                        "id": "line_1_18",
                                        "title": "bbox 3104 2476 4032 2741; baseline 0 283; x_size 117.33333; x_descenders 29.333332; x_ascenders 29.333334"
                                    },
                                    "span": {
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_192",
                                            "title": "bbox 3104 2476 4032 2741; x_wconf 95"
                                        }
                                    }
                                },
                                {
                                    "_attributes": {
                                        "class": "ocr_line",
                                        "id": "line_1_19",
                                        "title": "bbox 3134 2741 4032 3024; baseline 0 0; x_size 554; x_descenders 138.5; x_ascenders 138.5"
                                    },
                                    "span": {
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_193",
                                            "title": "bbox 3134 2741 4032 3024; x_wconf 95"
                                        }
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "_attributes": {
                            "class": "ocr_carea",
                            "id": "block_1_7",
                            "title": "bbox 320 2835 3104 2975"
                        },
                        "p": {
                            "_attributes": {
                                "class": "ocr_par",
                                "id": "par_1_8",
                                "lang": "eng",
                                "title": "bbox 320 2799 3166 2975"
                            },
                            "span": {
                                "_attributes": {
                                    "class": "ocr_line",
                                    "id": "line_1_20",
                                    "title": "bbox 320 2835 3104 2975; baseline -0.018 -8; x_size 110; x_descenders 21; x_ascenders 28"
                                },
                                "span": [{
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_194",
                                            "title": "bbox 320 2875 641 2962; x_wconf 87"
                                        },
                                        "_text": "Three"
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_195",
                                            "title": "bbox 678 2866 1126 2960; x_wconf 87"
                                        },
                                        "_text": "hundred"
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_196",
                                            "title": "bbox 1162 2888 1429 2975; x_wconf 89"
                                        },
                                        "_text": "years"
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_197",
                                            "title": "bbox 1466 2853 1788 2946; x_wconf 91"
                                        },
                                        "_text": "before"
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_198",
                                            "title": "bbox 1824 2842 2359 2945; x_wconf 85"
                                        },
                                        "_text": "Nietzsche,"
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_199",
                                            "title": "bbox 2398 2839 2558 2928; x_wconf 93"
                                        },
                                        "_text": "the"
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_200",
                                            "title": "bbox 2596 2855 2852 2948; x_wconf 90"
                                        },
                                        "_text": "great"
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_201",
                                            "title": "bbox 2883 2835 3057 2922; x_wconf 88"
                                        },
                                        "_text": "Fre"
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_202",
                                            "title": "bbox 3082 2873 3104 2912; x_wconf 75"
                                        },
                                        "_text": "."
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "_attributes": {
                            "class": "ocr_carea",
                            "id": "block_1_8",
                            "title": "bbox 2139 3012 2511 3024"
                        },
                        "p": {
                            "_attributes": {
                                "class": "ocr_par",
                                "id": "par_1_9",
                                "lang": "eng",
                                "title": "bbox 2139 3012 2511 3024"
                            },
                            "span": {
                                "_attributes": {
                                    "class": "ocr_line",
                                    "id": "line_1_21",
                                    "title": "bbox 2139 3012 2511 3024; baseline 0 0; x_size 16; x_descenders 4; x_ascenders 4"
                                },
                                "span": [{
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_203",
                                            "title": "bbox 2139 3015 2196 3024; x_wconf 60"
                                        },
                                        "_text": "4‘"
                                    },
                                    {
                                        "_attributes": {
                                            "class": "ocrx_word",
                                            "id": "word_1_204",
                                            "title": "bbox 2490 3012 2511 3024; x_wconf 71"
                                        },
                                        "em": {
                                            "_text": "‘"
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    }
}
// Can I navigated through the object to find a particular word 
// and a particular line? 

// Parse using Regex?
console.log(jsonHocrObject.html.body.div.div.p)

/* This module take an JSON object and transform it in several workable constants */

/* Array of lines "ocr_line"
Properties
    Required:
        bbox
    Allowed:
        baseline, hardbreak, x_font, x_fsize, x_bboxes 

ocr_line should be in a span        
*/
let ocr_lines = [];



// Array of words
let coll = new Array();
coll = [{
    word_id: 1,
    line_id: 1,
    word_text: "souls.",
    word_id: 2,
    line_id: 1,
    word_text: "This",
}];

// Collection of Lines / Words




// fullnames-Air:scripts accountname$ node importXML.js 
// This is what the compact version looks like