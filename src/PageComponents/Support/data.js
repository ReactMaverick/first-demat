import CAN_OPEN_DEMAT_IF_ALREADY_HAVE_TRADING_COMMODITY_ACCOUNT from "@/constants/Can_open_demat_if_already_have_trading_commodity_account";
import CAN_OPEN_DEMAT_IF_ALREADY_HAVE_TRADING_COMMODITY_ACCOUNT_OFFLINE from "@/constants/can_open_demat_if_already_have_trading_commodity_account_offline";
import OPEN_ZERODHA_DEMAT_ACCOUNT_OFFLINE from "@/constants/open_Zerodha_demat_account_offline";
import OPEN_ZERODHA_DEMAT_ACCOUNT_ONLINE from "@/constants/open_Zerodha_demat_account_online";
import { CircleUser, User } from "lucide-react";

export const faqTopicsLev1 = [
  { title: "Account Opening", Icon: CircleUser },
  { title: "Your Zerodha Account", Icon: User },
];

export const faqTopicsLev2 = {
  "Account Opening": [
    { title: "Resident individual", linkName: "resident-individual" },
    { title: "Minor", linkName: "minor" },
  ],
  "Your Zerodha Account": [
    { title: "Your Profile", linkName: "your-profile" },
    { title: "Account modification", linkName: "account-modification" },
  ],
};

export const faqTopicsLev3 = {
  "resident-individual": [
    {
      key: "Online",
      questions: [
        {
          question: "How to open a Zerodha demat account online?",
          linkName: "open_Zerodha_demat_account_online",
        },
        {
          question:
            "Can I open a demat account if I already have a trading or commodity account?",
          linkName: "can_open_demat_if_already_have_trading_commodity_account",
        },
      ],
    },
    {
      key: "Offline",
      questions: [
        {
          question: "How to open a Zerodha demat account offline?",
          linkName: "open_Zerodha_demat_account_offline",
        },
        {
          question:
            "Can I open a demat account if I already have a trading or commodity account?",
          linkName: "can_open_demat_if_already_have_trading_commodity_account",
        },
      ],
    },
  ],
  minor: [
    {
      key: "Online",
      questions: [
        {
          question: "How to open a minor demat account online?",
          linkName: "open_minor_demat_account_online",
        },
        {
          question: "What documents are required for minor account opening?",
          linkName: "minor_account_documents_required",
        },
        {
          question: "Can a minor trade independently?",
          linkName: "can_minor_trade_independently",
        },
      ],
    },
    {
      key: "Offline",
      questions: [
        {
          question: "How to open a minor demat account offline?",
          linkName: "open_minor_demat_account_offline",
        },
        {
          question: "What is the process for guardian consent?",
          linkName: "guardian_consent_process",
        },
        {
          question: "When does a minor account convert to regular account?",
          linkName: "minor_to_regular_account_conversion",
        },
      ],
    },
  ],
  "your-profile": [
    {
      key: "Profile",
      questions: [
        {
          question: "How to update personal information in my profile?",
          linkName: "update_personal_information_profile",
        },
        {
          question: "How to change profile picture?",
          linkName: "change_profile_picture",
        },
        {
          question: "How to update bank account details?",
          linkName: "update_bank_account_details",
        },
      ],
    },
    {
      key: "Email & SMS",
      questions: [
        {
          question: "How to update email address?",
          linkName: "update_email_address",
        },
        {
          question: "How to update mobile number?",
          linkName: "update_mobile_number",
        },
        {
          question: "How to manage SMS and email notifications?",
          linkName: "manage_sms_email_notifications",
        },
      ],
    },
  ],
  "account-modification": [
    {
      key: "Account modification",
      questions: [
        {
          question: "How to modify account type?",
          linkName: "modify_account_type",
        },
        {
          question: "How to add nominee details?",
          linkName: "add_nominee_details",
        },
        {
          question: "How to change registered address?",
          linkName: "change_registered_address",
        },
      ],
    },
    {
      key: "Switching from IL&FS to Zerodha",
      questions: [
        {
          question: "How to transfer holdings from IL&FS to Zerodha?",
          linkName: "transfer_holdings_ilfs_to_zerodha",
        },
        {
          question: "What documents are required for switching?",
          linkName: "documents_required_for_switching",
        },
        {
          question: "How long does the switching process take?",
          linkName: "switching_process_duration",
        },
      ],
    },
  ],
};

export const faqTopicsLev4 = {
  open_Zerodha_demat_account_online: OPEN_ZERODHA_DEMAT_ACCOUNT_ONLINE,
  can_open_demat_if_already_have_trading_commodity_account:
    CAN_OPEN_DEMAT_IF_ALREADY_HAVE_TRADING_COMMODITY_ACCOUNT,
  open_Zerodha_demat_account_offline: OPEN_ZERODHA_DEMAT_ACCOUNT_OFFLINE,
  can_open_demat_if_already_have_trading_commodity_account:
    CAN_OPEN_DEMAT_IF_ALREADY_HAVE_TRADING_COMMODITY_ACCOUNT_OFFLINE,
};
