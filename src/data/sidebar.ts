import { TbSmartHome } from "react-icons/tb";
import { IoDocumentsOutline } from "react-icons/io5";
import { CiExport } from "react-icons/ci";
import { RiVipCrownLine } from "react-icons/ri";
import { AiFillGolden } from "react-icons/ai";
import { GiCutDiamond } from "react-icons/gi";
import { BiDiamond } from "react-icons/bi";
import { MdOutlinePayments, MdOutlineAttachMoney, MdManageAccounts } from "react-icons/md";
import { CiImport, CiSettings } from "react-icons/ci";
import { IconType } from "react-icons/lib";
import { t } from "i18next";

export type MenuItem_TP = {
    id: string
    icon: IconType
    label: string
    link?: string

    items?: {
        id: string
        icon: IconType
        label: string
        link?: string
        items?: MenuItem_TP[]
    }[]
}

export const sideBarItems: MenuItem_TP[] = [
    {
        id: crypto.randomUUID(),
        icon: TbSmartHome,
        label: "الرئيسيه",
        link: "/",
    },
    {
        id: crypto.randomUUID(),
        label: "السندات",
        icon: IoDocumentsOutline,
        items: [
            {
                id: crypto.randomUUID(),
                label: "التوريد",
                icon: CiExport,
                items: [
                    {
                        id: crypto.randomUUID(),
                        label: "السندات",
                        link: "/contracts",
                        icon: RiVipCrownLine,
                    },
                    {
                        id: crypto.randomUUID(),
                        label: "سند توريد ذهب ",
                        link: "/contracts/gold",
                        icon: AiFillGolden,
                    },
                    {
                        id: crypto.randomUUID(),
                        label: "سند توريد الماس  ",
                        link: "/contracts/diamond",
                        icon: GiCutDiamond,
                    },
                    {
                        id: crypto.randomUUID(),
                        label: "سند توريد متفرقات ",
                        link: "/contracts/accessories",
                        icon: BiDiamond,
                    },
                ],
            },
            {
                id: crypto.randomUUID(),
                label: "السداد ",
                icon: MdOutlineAttachMoney,

                items: [
                    {
                        id: crypto.randomUUID(),
                        label: "سند السداد ",
                        link: "/return-payment",
                        icon: CiImport,
                    },
                ],
            },
            {
                id: crypto.randomUUID(),
                label: "المردود",
                link: "Return",
                icon: MdOutlinePayments,
                items: [
                    {
                        id: crypto.randomUUID(),
                        label: " مردود توريد",
                        link: "return-table",
                        icon: MdOutlinePayments,
                    },
                    {
                        id: crypto.randomUUID(),
                        label: " مردود ذهب",
                        link: "return-gold",
                        icon: AiFillGolden,
                    },
                    {
                        id: crypto.randomUUID(),
                        label: " مردود الماس",
                        link: "return-diamond",
                        icon: AiFillGolden,
                    },
                    {
                        id: crypto.randomUUID(),
                        label: " مردود متفرقات",
                        link: "return-accessories",
                        icon: AiFillGolden,
                    },
                ],
            },
            {
                id: crypto.randomUUID(),
                label: "حجز الذهب ",
                link: "reservation",
                icon: MdOutlinePayments,
            },
        ],
    },
    {
        id: crypto.randomUUID(),
        label: "تأسيس النظام ",
        link: "system",
        icon: CiSettings,
    },
    {
        id: crypto.randomUUID(),
        label: t("administrative-structure"),
        link: "/administrative-structure",
        icon: MdManageAccounts,
    },
    // {
    //   id: crypto.randomUUID(),
    //   label: " الترقيم ",
    //   link: "coding",
    //   icon: CiSettings,
    // },
    {
        id: crypto.randomUUID(),
        label: "الاعدادات ",
        link: "settings",
        icon: CiSettings,
    },
]