import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Void: any;
};

export type Account = {
  __typename?: "Account";
  accountOpenDate: Scalars["DateTime"];
  approvalType: Scalars["String"];
  apr: Scalars["Float"];
  billingCycleDay: Scalars["Int"];
  chaUrl: Scalars["String"];
  cpAccountNumber: Scalars["String"];
  createdAt: Scalars["DateTime"];
  creditLimit: Scalars["Float"];
  currentBalance: Scalars["Float"];
  dateCreated: Scalars["Date"];
  daysPastDueDate: Scalars["Int"];
  dueAmount: Scalars["Float"];
  dueDate: Scalars["Date"];
  dueDateUtc: Scalars["DateTime"];
  highestCreditUtilised: Scalars["Float"];
  id: Scalars["String"];
  minimumPayment: Scalars["Float"];
  overLimitCredit: Scalars["Float"];
  reason?: Maybe<AccountStatusReason>;
  remainingMinimumPaymentDue: Scalars["Float"];
  remainingStatementBalance: Scalars["Float"];
  statementBalance: Scalars["Float"];
  status?: Maybe<AccountStatus>;
  updatedAt: Scalars["DateTime"];
  usage?: Maybe<AccountUsage>;
  userId: Scalars["String"];
};

export enum AccountStatus {
  Active = "active",
  Closed = "closed",
  Suspended = "suspended",
}

export enum AccountStatusReason {
  Active = "active",
  Bankruptcy = "bankruptcy",
  ChargedOff = "chargedOff",
  CustomerInitiated = "customerInitiated",
  DebtManagementPlan = "debtManagementPlan",
  Deceased = "deceased",
  Delinquent = "delinquent",
  DisasterRecovery = "disasterRecovery",
  DisasterRecoveryCustomerInitiated = "disasterRecoveryCustomerInitiated",
  DisasterRecoveryGenericRestricted = "disasterRecoveryGenericRestricted",
  DisasterRecoveryIssuerInitiated = "disasterRecoveryIssuerInitiated",
  FirstPartyFraud = "firstPartyFraud",
  GenericRestricted = "genericRestricted",
  Hardship = "hardship",
  IssuerInitiated = "issuerInitiated",
  OfacConfirmed = "ofacConfirmed",
  Overlimit = "overlimit",
  PendingBankruptcy = "pendingBankruptcy",
  PendingSettlement = "pendingSettlement",
  ReturnedEmail = "returnedEmail",
  Settled = "settled",
  SuspectedFirstPartyFraud = "suspectedFirstPartyFraud",
  SuspectedOfac = "suspectedOfac",
  SuspectedThirdPartyFraud = "suspectedThirdPartyFraud",
  TermsOfUseViolation = "termsOfUseViolation",
  ThirdPartyFraud = "thirdPartyFraud",
}

export enum AccountUsage {
  Global = "global",
  Local = "local",
}

export type Address = {
  __typename?: "Address";
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  formattedAddress?: Maybe<Scalars["String"]>;
  googlePlaceId?: Maybe<Scalars["String"]>;
  lat?: Maybe<Scalars["Float"]>;
  line1?: Maybe<Scalars["String"]>;
  line2?: Maybe<Scalars["String"]>;
  lng?: Maybe<Scalars["Float"]>;
  postalCode?: Maybe<Scalars["String"]>;
  rawAddress: Scalars["String"];
  state?: Maybe<Scalars["String"]>;
};

export enum AddressType {
  Residence = "residence",
  Shipping = "shipping",
}

export type ApplicationAddressInput = {
  city: Scalars["String"];
  line1: Scalars["String"];
  line2: Scalars["String"];
  state: Scalars["String"];
  zip: Scalars["String"];
};

export type ApplicationDemographicInput = {
  address: ApplicationAddressInput;
  dateOfBirth: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  ssn: Scalars["String"];
};

export type ApplicationFinancialInfoInput = {
  income: Scalars["Int"];
};

export enum ApplicationStatusEnum {
  Abandoned = "abandoned",
  ApplicantInputRequested = "applicantInputRequested",
  ApprovedProductAbandoned = "approvedProductAbandoned",
  ApprovedProductDeclined = "approvedProductDeclined",
  Duplicate = "duplicate",
  InError = "inError",
  InProgress = "inProgress",
  InReview = "inReview",
  Provisioned = "provisioned",
  Provisioning = "provisioning",
  ProvisioningError = "provisioningError",
  Rejected = "rejected",
}

export type ApplicationSubmittedContext = {
  __typename?: "ApplicationSubmittedContext";
  account?: Maybe<Account>;
  applicationStatus: ApplicationStatusEnum;
};

export enum BankAccountType {
  Checking = "checking",
  Savings = "savings",
}

export type BaseError = Error & {
  __typename?: "BaseError";
  code: Scalars["String"];
  message: Scalars["String"];
};

export type Card = {
  __typename?: "Card";
  accountId: Scalars["String"];
  activatedAt?: Maybe<Scalars["DateTime"]>;
  cardDesign: Scalars["String"];
  cardNumber: Scalars["String"];
  createdAt: Scalars["DateTime"];
  cvv: Scalars["String"];
  expirationDate: Scalars["String"];
  id: Scalars["String"];
  last4Digits: Scalars["String"];
  physicalCard: Scalars["Boolean"];
  status: CardStatus;
  updatedAt: Scalars["DateTime"];
};

export type CardArt = {
  __typename?: "CardArt";
  backImageUrl: Scalars["String"];
  frontImageUrl: Scalars["String"];
};

export enum CardArtType {
  Hypercard = "hypercard",
  Organization = "organization",
}

export enum CardCancelReason {
  Breach = "breach",
  Lost = "lost",
  Stolen = "stolen",
}

export type CardReplacement = {
  __typename?: "CardReplacement";
  newCard: Card;
  note: Scalars["String"];
  oldCard: Card;
};

export enum CardStatus {
  Active = "active",
  Canceled = "canceled",
  Closed = "closed",
  Failed = "failed",
  Fraud = "fraud",
  Frozen = "frozen",
  LostOrStolen = "lostOrStolen",
  Pending = "pending",
  ReplacementRequested = "replacementRequested",
  Transferred = "transferred",
}

export type Cardholder = {
  __typename?: "Cardholder";
  createdAt?: Maybe<Scalars["DateTime"]>;
  dateOfBirth: Scalars["Date"];
  dislikedRewardRuleIds: Array<Scalars["Int"]>;
  email: Scalars["String"];
  employmentStartDate?: Maybe<Scalars["DateTime"]>;
  firstName: Scalars["String"];
  id: Scalars["String"];
  lastName: Scalars["String"];
  likedRewardRuleIds: Array<Scalars["Int"]>;
  middleName?: Maybe<Scalars["String"]>;
  nameOnCard?: Maybe<Scalars["String"]>;
  paperlessStatement: Scalars["Boolean"];
  phoneNumber: Scalars["String"];
  residentialAddress: CardholderAddress;
  shippingAddress: CardholderAddress;
  ssn?: Maybe<Scalars["String"]>;
  ssnLastFour?: Maybe<Scalars["String"]>;
  state?: Maybe<DeserveProfileState>;
  stytchUserId: Scalars["String"];
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type CardholderAddress = {
  __typename?: "CardholderAddress";
  addressLine1: Scalars["String"];
  addressLine2?: Maybe<Scalars["String"]>;
  city: Scalars["String"];
  country: Scalars["String"];
  id: Scalars["String"];
  sequence: Scalars["Int"];
  state: Scalars["String"];
  type: AddressType;
  zip: Scalars["String"];
};

export type Category = {
  __typename?: "Category";
  coverImage: Scalars["String"];
  iconImage: Scalars["String"];
  id: Scalars["String"];
  merchantImage: Scalars["String"];
  name: Scalars["String"];
};

export type CreateAchPaymentMethodInput = {
  accountNumber: Scalars["String"];
  accountType: BankAccountType;
  bankName: Scalars["String"];
  name: Scalars["String"];
  routingNumber: Scalars["String"];
};

export type CreateDisputeInput = {
  amount: Scalars["String"];
  merchantContactedDate?: InputMaybe<Scalars["String"]>;
  notes?: InputMaybe<Scalars["String"]>;
  productCancelledDate?: InputMaybe<Scalars["String"]>;
  productReturnedDate?: InputMaybe<Scalars["String"]>;
  reason: DisputeReason;
  transactionId: Scalars["Int"];
};

export type CreateDueDatePaymentScheduleInput = {
  amount?: InputMaybe<Scalars["String"]>;
  methodId: Scalars["String"];
  type: PaymentType;
};

export type CreateInstantPaymentInput = {
  amount?: InputMaybe<Scalars["String"]>;
  methodId: Scalars["String"];
  type: PaymentType;
};

export enum CreditIndicator {
  Credit = "credit",
  Debit = "debit",
}

export enum DeserveProfileState {
  Abandoned = "abandoned",
  ActiveAccount = "activeAccount",
  ClosedAccount = "closedAccount",
  Complete = "complete",
  Incomplete = "incomplete",
}

export enum DigitalWallet {
  ApplePay = "applePay",
  GooglePay = "googlePay",
}

export type Dispute = {
  __typename?: "Dispute";
  activity?: Maybe<Array<DisputeActivity>>;
  amount: Scalars["String"];
  createdAt?: Maybe<Scalars["DateTime"]>;
  deserveTransactionId: Scalars["String"];
  id: Scalars["String"];
  merchantContactedDate?: Maybe<Scalars["Date"]>;
  notes: Scalars["String"];
  productCancelledDate?: Maybe<Scalars["Date"]>;
  productReturnedDate?: Maybe<Scalars["Date"]>;
  reason: DisputeReason;
  resolution?: Maybe<DisputeResolution>;
  resolutionDescription?: Maybe<DisputeResolutionDescription>;
  status: DisputeStatus;
};

export type DisputeActivity = {
  __typename?: "DisputeActivity";
  code: DisputeActivityCode;
  createdAt?: Maybe<Scalars["DateTime"]>;
  details: DisputeActivityDetail;
  id: Scalars["String"];
};

export enum DisputeActivityCode {
  Created = "created",
  CustomerEnquiry = "customerEnquiry",
  EvidenceProvided = "evidenceProvided",
  Initiated = "initiated",
  ReceiveSecondPresentment = "receiveSecondPresentment",
  ReportedCardLost = "reportedCardLost",
  ReportedCardStolen = "reportedCardStolen",
  ReportedFraud = "reportedFraud",
  Resolved = "resolved",
  Reversal = "reversal",
  SendArbitrationChargeback = "sendArbitrationChargeback",
  SendChargebackToMc = "sendChargebackToMC",
  Withdrawn = "withdrawn",
}

export type DisputeActivityDetail = {
  __typename?: "DisputeActivityDetail";
  amount?: Maybe<Scalars["String"]>;
  merchantContactedDate?: Maybe<Scalars["Date"]>;
  notes?: Maybe<Scalars["String"]>;
  oldStatus?: Maybe<DisputeStatus>;
  productCancelledDate?: Maybe<Scalars["Date"]>;
  productReturnedDate?: Maybe<Scalars["Date"]>;
  reason?: Maybe<DisputeReason>;
  transactionAmount?: Maybe<Scalars["String"]>;
  transactionId?: Maybe<Scalars["String"]>;
  transactionMerchantName?: Maybe<Scalars["String"]>;
};

export enum DisputeReason {
  CompromisedCard = "compromisedCard",
  LostCard = "lostCard",
  Other = "other",
  ProductCancelled = "productCancelled",
  ProductDefective = "productDefective",
  ProductNotAsDescribed = "productNotAsDescribed",
  ProductNotReceived = "productNotReceived",
  ProductReturned = "productReturned",
  StolenCard = "stolenCard",
  WrongAmount = "wrongAmount",
}

export enum DisputeResolution {
  Against = "against",
  InFavor = "inFavor",
  Reversal = "reversal",
}

export enum DisputeResolutionDescription {
  LostAndDebitTransaction = "lostAndDebitTransaction",
  LostAndDebitTransactionAndInterest = "lostAndDebitTransactionAndInterest",
  RebilledCurrentDate = "rebilledCurrentDate",
  RebilledPresentmentDate = "rebilledPresentmentDate",
  Won = "won",
  WrittenOffFraud = "writtenOffFraud",
  WrittenOffNonFraud = "writtenOffNonFraud",
}

export enum DisputeStatus {
  Pending = "pending",
  Resolved = "resolved",
  Withdrawn = "withdrawn",
}

export type Employee = {
  __typename?: "Employee";
  address?: Maybe<Address>;
  dateOfBirth?: Maybe<Scalars["DateTime"]>;
  firstName?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  lastName?: Maybe<Scalars["String"]>;
  organizationId: Scalars["String"];
  phoneNumber?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
  workEmail?: Maybe<Scalars["String"]>;
};

export type EmployeeApplicationStartedContext = {
  __typename?: "EmployeeApplicationStartedContext";
  applicationId: Scalars["String"];
  employee: Employee;
};

export type Error = {
  code: Scalars["String"];
  message: Scalars["String"];
};

export type ExternalMerchant = {
  __typename?: "ExternalMerchant";
  addressDetails?: Maybe<Scalars["String"]>;
  cardacceptorNameLocation?: Maybe<Scalars["String"]>;
  category: Category;
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  coverImage?: Maybe<Scalars["String"]>;
  cpMerchantCategoryCode?: Maybe<Scalars["String"]>;
  displayName: Scalars["String"];
  formattedAddress?: Maybe<Scalars["String"]>;
  googleMapUrl?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  latitude?: Maybe<Scalars["String"]>;
  longitude?: Maybe<Scalars["String"]>;
  merchantBrand?: Maybe<ExternalMerchantBrand>;
  merchantType: Scalars["String"];
  name: Scalars["String"];
  phoneNumber?: Maybe<Scalars["String"]>;
  secondaryMerchantBrand?: Maybe<ExternalMerchantBrand>;
  secondaryMerchantName?: Maybe<Scalars["String"]>;
  state?: Maybe<Scalars["String"]>;
  streetName?: Maybe<Scalars["String"]>;
  streetNumber?: Maybe<Scalars["String"]>;
  website?: Maybe<Scalars["String"]>;
  zipcode?: Maybe<Scalars["String"]>;
};

export type ExternalMerchantBrand = {
  __typename?: "ExternalMerchantBrand";
  id: Scalars["String"];
  logoImage?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
};

export type HypercardMerchant = {
  __typename?: "HypercardMerchant";
  id: Scalars["Int"];
  logoImageUrl: Scalars["String"];
};

export type IntegerCursorPaginationInput = {
  cursor?: InputMaybe<Scalars["Int"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  activateCard: MutationActivateCardResult;
  cancelCard: MutationCancelCardResult;
  completePhoneNumberUpdate: MutationCompletePhoneNumberUpdateResult;
  createACHPaymentMethod: MutationCreateAchPaymentMethodResult;
  createDispute: MutationCreateDisputeResult;
  createDueDatePaymentSchedule: MutationCreateDueDatePaymentScheduleResult;
  createInstantPaymentSchedule: MutationCreateInstantPaymentScheduleResult;
  deletePaymentMethod: MutationDeletePaymentMethodResult;
  deletePaymentSchedule: MutationDeletePaymentScheduleResult;
  redeemPoints: MutationRedeemPointsResult;
  registerOfferAnalytic: Scalars["Boolean"];
  replaceCard: MutationReplaceCardResult;
  reportCardFraud: MutationReportCardFraudResult;
  reportLostOrStolenCard: MutationReportLostOrStolenCardResult;
  resolveDispute: MutationResolveDisputeResult;
  sendOTP: MutationSendOtpResult;
  simulateTransaction: MutationSimulateTransactionResult;
  startEmployeeApplication: MutationStartEmployeeApplicationResult;
  startPhoneNumberUpdate: MutationStartPhoneNumberUpdateResult;
  startWaitlistUserApplication: MutationStartWaitlistUserApplicationResult;
  submitEmployeeApplication: MutationSubmitEmployeeApplicationResult;
  submitFeedback: MutationSubmitFeedbackResult;
  submitWaitlistUserApplication: MutationSubmitWaitlistUserApplicationResult;
  updateCardPin: MutationUpdateCardPinResult;
  updateFreezeStatus: MutationUpdateFreezeStatusResult;
  updateNotificationSettings: MutationUpdateNotificationSettingsResult;
  updateUserAddress: MutationUpdateUserAddressResult;
  updateUserPreferences: MutationUpdateUserPreferencesResult;
  upsertAutoPaymentSchedule: MutationUpsertAutoPaymentScheduleResult;
  withdrawDispute: MutationWithdrawDisputeResult;
};

export type MutationActivateCardArgs = {
  cardId: Scalars["String"];
  last4Digits: Scalars["String"];
};

export type MutationCancelCardArgs = {
  cardId: Scalars["String"];
  reason: CardCancelReason;
};

export type MutationCompletePhoneNumberUpdateArgs = {
  newPhoneNumber: Scalars["String"];
};

export type MutationCreateAchPaymentMethodArgs = {
  paymentMethodInput: CreateAchPaymentMethodInput;
};

export type MutationCreateDisputeArgs = {
  input: CreateDisputeInput;
};

export type MutationCreateDueDatePaymentScheduleArgs = {
  input: CreateDueDatePaymentScheduleInput;
};

export type MutationCreateInstantPaymentScheduleArgs = {
  input: CreateInstantPaymentInput;
};

export type MutationDeletePaymentMethodArgs = {
  methodId: Scalars["String"];
};

export type MutationDeletePaymentScheduleArgs = {
  scheduleId: Scalars["String"];
};

export type MutationRedeemPointsArgs = {
  amount: Scalars["Int"];
};

export type MutationRegisterOfferAnalyticArgs = {
  liked: Scalars["Boolean"];
  rewardRuleId: Scalars["Int"];
};

export type MutationReplaceCardArgs = {
  cardId: Scalars["String"];
  isDamaged: Scalars["Boolean"];
  isPhysical: Scalars["Boolean"];
};

export type MutationReportCardFraudArgs = {
  cardId: Scalars["String"];
};

export type MutationReportLostOrStolenCardArgs = {
  cardId: Scalars["String"];
};

export type MutationResolveDisputeArgs = {
  accountId: Scalars["String"];
  disputeId: Scalars["String"];
  resolution: DisputeResolution;
  resolutionDescription: DisputeResolutionDescription;
};

export type MutationSendOtpArgs = {
  phoneNumber: Scalars["String"];
};

export type MutationSimulateTransactionArgs = {
  amount?: InputMaybe<Scalars["Float"]>;
  merchantId?: InputMaybe<Scalars["String"]>;
};

export type MutationStartEmployeeApplicationArgs = {
  code: Scalars["String"];
  testEmail: Scalars["String"];
};

export type MutationStartPhoneNumberUpdateArgs = {
  newPhoneNumber: Scalars["String"];
};

export type MutationSubmitEmployeeApplicationArgs = {
  applicationId: Scalars["String"];
  cardArt?: InputMaybe<CardArtType>;
  demographic: ApplicationDemographicInput;
  financialInfo: ApplicationFinancialInfoInput;
  organizationId: Scalars["String"];
  testEmail: Scalars["String"];
};

export type MutationSubmitFeedbackArgs = {
  feedback: Scalars["String"];
};

export type MutationSubmitWaitlistUserApplicationArgs = {
  applicationId: Scalars["String"];
  demographic: ApplicationDemographicInput;
  financialInfo: ApplicationFinancialInfoInput;
};

export type MutationUpdateCardPinArgs = {
  cardId: Scalars["String"];
  pin: Scalars["String"];
};

export type MutationUpdateFreezeStatusArgs = {
  cardId: Scalars["String"];
  freeze: Scalars["Boolean"];
};

export type MutationUpdateNotificationSettingsArgs = {
  settings: NotificationSettingsInput;
};

export type MutationUpdateUserAddressArgs = {
  address: UpdateCardholderAddressInput;
};

export type MutationUpdateUserPreferencesArgs = {
  paperlessStatement: Scalars["Boolean"];
};

export type MutationUpsertAutoPaymentScheduleArgs = {
  input: UpsertAutoPaymentScheduleInput;
};

export type MutationWithdrawDisputeArgs = {
  disputeId: Scalars["String"];
};

export type MutationActivateCardResult =
  | BaseError
  | MutationActivateCardSuccess
  | ValidationError;

export type MutationActivateCardSuccess = {
  __typename?: "MutationActivateCardSuccess";
  data: Scalars["Boolean"];
};

export type MutationCancelCardResult =
  | BaseError
  | MutationCancelCardSuccess
  | ValidationError;

export type MutationCancelCardSuccess = {
  __typename?: "MutationCancelCardSuccess";
  data: Scalars["Boolean"];
};

export type MutationCompletePhoneNumberUpdateResult =
  | BaseError
  | MutationCompletePhoneNumberUpdateSuccess
  | ValidationError;

export type MutationCompletePhoneNumberUpdateSuccess = {
  __typename?: "MutationCompletePhoneNumberUpdateSuccess";
  data: Scalars["Void"];
};

export type MutationCreateAchPaymentMethodResult =
  | BaseError
  | MutationCreateAchPaymentMethodSuccess
  | ValidationError;

export type MutationCreateAchPaymentMethodSuccess = {
  __typename?: "MutationCreateACHPaymentMethodSuccess";
  data: PaymentMethod;
};

export type MutationCreateDisputeResult =
  | BaseError
  | MutationCreateDisputeSuccess
  | ValidationError;

export type MutationCreateDisputeSuccess = {
  __typename?: "MutationCreateDisputeSuccess";
  data: Dispute;
};

export type MutationCreateDueDatePaymentScheduleResult =
  | BaseError
  | MutationCreateDueDatePaymentScheduleSuccess
  | ValidationError;

export type MutationCreateDueDatePaymentScheduleSuccess = {
  __typename?: "MutationCreateDueDatePaymentScheduleSuccess";
  data: PaymentSchedule;
};

export type MutationCreateInstantPaymentScheduleResult =
  | BaseError
  | MutationCreateInstantPaymentScheduleSuccess
  | ValidationError;

export type MutationCreateInstantPaymentScheduleSuccess = {
  __typename?: "MutationCreateInstantPaymentScheduleSuccess";
  data: PaymentSchedule;
};

export type MutationDeletePaymentMethodResult =
  | BaseError
  | MutationDeletePaymentMethodSuccess
  | ValidationError;

export type MutationDeletePaymentMethodSuccess = {
  __typename?: "MutationDeletePaymentMethodSuccess";
  data: Scalars["Boolean"];
};

export type MutationDeletePaymentScheduleResult =
  | BaseError
  | MutationDeletePaymentScheduleSuccess
  | ValidationError;

export type MutationDeletePaymentScheduleSuccess = {
  __typename?: "MutationDeletePaymentScheduleSuccess";
  data: Scalars["Boolean"];
};

export type MutationRedeemPointsResult =
  | BaseError
  | MutationRedeemPointsSuccess
  | ValidationError;

export type MutationRedeemPointsSuccess = {
  __typename?: "MutationRedeemPointsSuccess";
  data: Scalars["Void"];
};

export type MutationReplaceCardResult =
  | BaseError
  | MutationReplaceCardSuccess
  | ValidationError;

export type MutationReplaceCardSuccess = {
  __typename?: "MutationReplaceCardSuccess";
  data: CardReplacement;
};

export type MutationReportCardFraudResult =
  | BaseError
  | MutationReportCardFraudSuccess
  | ValidationError;

export type MutationReportCardFraudSuccess = {
  __typename?: "MutationReportCardFraudSuccess";
  data: CardReplacement;
};

export type MutationReportLostOrStolenCardResult =
  | BaseError
  | MutationReportLostOrStolenCardSuccess
  | ValidationError;

export type MutationReportLostOrStolenCardSuccess = {
  __typename?: "MutationReportLostOrStolenCardSuccess";
  data: CardReplacement;
};

export type MutationResolveDisputeResult =
  | BaseError
  | MutationResolveDisputeSuccess
  | ValidationError;

export type MutationResolveDisputeSuccess = {
  __typename?: "MutationResolveDisputeSuccess";
  data: Dispute;
};

export type MutationSendOtpResult = BaseError | MutationSendOtpSuccess | ValidationError;

export type MutationSendOtpSuccess = {
  __typename?: "MutationSendOTPSuccess";
  data: Scalars["String"];
};

export type MutationSimulateTransactionResult =
  | BaseError
  | MutationSimulateTransactionSuccess
  | ValidationError;

export type MutationSimulateTransactionSuccess = {
  __typename?: "MutationSimulateTransactionSuccess";
  data: Scalars["Boolean"];
};

export type MutationStartEmployeeApplicationResult =
  | BaseError
  | MutationStartEmployeeApplicationSuccess
  | ValidationError;

export type MutationStartEmployeeApplicationSuccess = {
  __typename?: "MutationStartEmployeeApplicationSuccess";
  data: EmployeeApplicationStartedContext;
};

export type MutationStartPhoneNumberUpdateResult =
  | BaseError
  | MutationStartPhoneNumberUpdateSuccess
  | ValidationError;

export type MutationStartPhoneNumberUpdateSuccess = {
  __typename?: "MutationStartPhoneNumberUpdateSuccess";
  data: Scalars["String"];
};

export type MutationStartWaitlistUserApplicationResult =
  | BaseError
  | MutationStartWaitlistUserApplicationSuccess
  | ValidationError;

export type MutationStartWaitlistUserApplicationSuccess = {
  __typename?: "MutationStartWaitlistUserApplicationSuccess";
  data: WaitlistUserApplicationStartedContext;
};

export type MutationSubmitEmployeeApplicationResult =
  | BaseError
  | MutationSubmitEmployeeApplicationSuccess
  | ValidationError;

export type MutationSubmitEmployeeApplicationSuccess = {
  __typename?: "MutationSubmitEmployeeApplicationSuccess";
  data: ApplicationSubmittedContext;
};

export type MutationSubmitFeedbackResult =
  | BaseError
  | MutationSubmitFeedbackSuccess
  | ValidationError;

export type MutationSubmitFeedbackSuccess = {
  __typename?: "MutationSubmitFeedbackSuccess";
  data: Scalars["Boolean"];
};

export type MutationSubmitWaitlistUserApplicationResult =
  | BaseError
  | MutationSubmitWaitlistUserApplicationSuccess
  | ValidationError;

export type MutationSubmitWaitlistUserApplicationSuccess = {
  __typename?: "MutationSubmitWaitlistUserApplicationSuccess";
  data: ApplicationSubmittedContext;
};

export type MutationUpdateCardPinResult =
  | BaseError
  | MutationUpdateCardPinSuccess
  | ValidationError;

export type MutationUpdateCardPinSuccess = {
  __typename?: "MutationUpdateCardPinSuccess";
  data: Scalars["Boolean"];
};

export type MutationUpdateFreezeStatusResult =
  | BaseError
  | MutationUpdateFreezeStatusSuccess
  | ValidationError;

export type MutationUpdateFreezeStatusSuccess = {
  __typename?: "MutationUpdateFreezeStatusSuccess";
  data: Scalars["Boolean"];
};

export type MutationUpdateNotificationSettingsResult =
  | BaseError
  | MutationUpdateNotificationSettingsSuccess
  | ValidationError;

export type MutationUpdateNotificationSettingsSuccess = {
  __typename?: "MutationUpdateNotificationSettingsSuccess";
  data: NotificationSettings;
};

export type MutationUpdateUserAddressResult =
  | BaseError
  | MutationUpdateUserAddressSuccess
  | ValidationError;

export type MutationUpdateUserAddressSuccess = {
  __typename?: "MutationUpdateUserAddressSuccess";
  data: Scalars["Boolean"];
};

export type MutationUpdateUserPreferencesResult =
  | BaseError
  | MutationUpdateUserPreferencesSuccess
  | ValidationError;

export type MutationUpdateUserPreferencesSuccess = {
  __typename?: "MutationUpdateUserPreferencesSuccess";
  data: Scalars["Boolean"];
};

export type MutationUpsertAutoPaymentScheduleResult =
  | BaseError
  | MutationUpsertAutoPaymentScheduleSuccess
  | ValidationError;

export type MutationUpsertAutoPaymentScheduleSuccess = {
  __typename?: "MutationUpsertAutoPaymentScheduleSuccess";
  data: PaymentSchedule;
};

export type MutationWithdrawDisputeResult =
  | BaseError
  | MutationWithdrawDisputeSuccess
  | ValidationError;

export type MutationWithdrawDisputeSuccess = {
  __typename?: "MutationWithdrawDisputeSuccess";
  data: Dispute;
};

export type NotificationSettings = {
  __typename?: "NotificationSettings";
  rewards: RewardNotificationSettings;
  statements: StatementNotificationSettings;
  transactions: TransactionNotificationSettings;
};

export type NotificationSettingsInput = {
  rewards?: InputMaybe<RewardNotificationSettingsInput>;
  statements?: InputMaybe<StatementNotificationSettingsInput>;
  transactions?: InputMaybe<TransactionNotificationSettingsInput>;
};

export type Offer = {
  __typename?: "Offer";
  category?: Maybe<OfferCategory>;
  details: Scalars["String"];
  externalMerchant?: Maybe<ExternalMerchant>;
  flair?: Maybe<OfferFlair>;
  hypercardMerchant?: Maybe<HypercardMerchant>;
  identifier: Scalars["String"];
  longDetails?: Maybe<Scalars["String"]>;
  restaurantOffer?: Maybe<RestaurantOffer>;
  reward: Scalars["String"];
  rewardRuleId: Scalars["Int"];
  terms?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
};

export enum OfferCategory {
  Dining = "dining",
  Lifestyle = "lifestyle",
  Wellness = "wellness",
}

export enum OfferFlair {
  New = "new",
  Trending = "trending",
}

export type OffsetPaginationInput = {
  offset?: InputMaybe<Scalars["Int"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
};

export type PaymentMethod = {
  __typename?: "PaymentMethod";
  accountLast4Digits: Scalars["String"];
  accountType: BankAccountType;
  bankLogoUrl: Scalars["String"];
  bankName: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  routingNumber: Scalars["String"];
  status: PaymentMethodStatus;
};

export enum PaymentMethodStatus {
  Active = "active",
  Deleted = "deleted",
  Invalid = "invalid",
  PendingValidation = "pendingValidation",
  ValidationInProgress = "validationInProgress",
}

export enum PaymentProcessType {
  Ach = "ach",
  Check = "check",
  Manual = "manual",
}

export type PaymentSchedule = {
  __typename?: "PaymentSchedule";
  amount?: Maybe<Scalars["String"]>;
  day?: Maybe<Scalars["Int"]>;
  dayOfMonth?: Maybe<Scalars["String"]>;
  frequency: PaymentScheduleFrequency;
  id: Scalars["String"];
  methodId: Scalars["String"];
  methodType: Scalars["String"];
  nextPaymentAmount?: Maybe<Scalars["Float"]>;
  paymentDate?: Maybe<Scalars["Date"]>;
  reason?: Maybe<Scalars["String"]>;
  status: PaymentScheduleStatus;
  type: PaymentType;
};

export enum PaymentScheduleFrequency {
  DueDate = "dueDate",
  Instant = "instant",
  Monthly = "monthly",
}

export enum PaymentScheduleStatus {
  Active = "active",
  Completed = "completed",
  Deleted = "deleted",
  Failed = "failed",
  Skipped = "skipped",
}

export type PaymentTransaction = {
  __typename?: "PaymentTransaction";
  amount: Scalars["Float"];
  completedAt?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  deserveAccountId: Scalars["String"];
  deservePaymentMethodId?: Maybe<Scalars["String"]>;
  deservePaymentScheduleId?: Maybe<Scalars["String"]>;
  frequency?: Maybe<Scalars["String"]>;
  id: Scalars["Int"];
  initiatedAt?: Maybe<Scalars["DateTime"]>;
  paymentProcessType: PaymentProcessType;
  reason?: Maybe<Scalars["String"]>;
  refundedAt?: Maybe<Scalars["DateTime"]>;
  returnedAt?: Maybe<Scalars["DateTime"]>;
  status: PaymentTransactionStatus;
  transactedAt: Scalars["DateTime"];
  type: PaymentTransactionType;
};

export enum PaymentTransactionStatus {
  Cancelled = "cancelled",
  Completed = "completed",
  Initiated = "initiated",
  Processing = "processing",
  Refunded = "refunded",
  Refunding = "refunding",
  Returned = "returned",
  Returning = "returning",
}

export enum PaymentTransactionType {
  Regular = "regular",
  Reversal = "reversal",
}

export enum PaymentType {
  CurrentBalance = "currentBalance",
  FixedAmount = "fixedAmount",
  MinimumPayment = "minimumPayment",
  StatementBalance = "statementBalance",
}

export enum PosType {
  Online = "online",
  Physical = "physical",
  Recurring = "recurring",
  Unknown = "unknown",
}

export type Query = {
  __typename?: "Query";
  account: Account;
  achPaymentMethods: Array<PaymentMethod>;
  activeAutoPayment?: Maybe<QueryActiveAutoPaymentResult>;
  card: QueryCardResult;
  cardArt: QueryCardArtResult;
  cardholder?: Maybe<Cardholder>;
  cards: QueryCardsResult;
  categories?: Maybe<Array<Category>>;
  detokenizedCard: QueryDetokenizedCardResult;
  dispute: QueryDisputeResult;
  disputes: Array<Dispute>;
  externalMerchant?: Maybe<QueryExternalMerchantResult>;
  healthCheck: Scalars["String"];
  notificationSettings?: Maybe<NotificationSettings>;
  offers: QueryOffersResult;
  paymentMethods: Array<PaymentMethod>;
  paymentSchedules: QueryPaymentSchedulesResult;
  primaryCard?: Maybe<QueryPrimaryCardResult>;
  statement: QueryStatementResult;
  statements: QueryStatementsResult;
  totalPoints?: Maybe<Scalars["Int"]>;
  transaction?: Maybe<QueryTransactionResult>;
  transactions: QueryTransactionsResult;
};

export type QueryCardArgs = {
  cardId: Scalars["String"];
};

export type QueryDetokenizedCardArgs = {
  cardId: Scalars["String"];
};

export type QueryDisputeArgs = {
  disputeId: Scalars["String"];
};

export type QueryExternalMerchantArgs = {
  merchantId: Scalars["String"];
};

export type QueryOffersArgs = {
  category?: InputMaybe<OfferCategory>;
  onlyPerkOffers?: InputMaybe<Scalars["Boolean"]>;
  onlyRestaurantOffers?: InputMaybe<Scalars["Boolean"]>;
  restaurantCity?: InputMaybe<RestaurantCity>;
};

export type QueryPaymentSchedulesArgs = {
  frequency?: InputMaybe<PaymentScheduleFrequency>;
  status?: InputMaybe<PaymentScheduleStatus>;
};

export type QueryStatementArgs = {
  statementId: Scalars["String"];
};

export type QueryStatementsArgs = {
  pagination?: InputMaybe<StringCursorPaginationInput>;
};

export type QueryTransactionArgs = {
  includeMerchant?: InputMaybe<Scalars["Boolean"]>;
  includeReward?: InputMaybe<Scalars["Boolean"]>;
  transactionId: Scalars["Int"];
};

export type QueryTransactionsArgs = {
  filters?: InputMaybe<TransactionsFilterInput>;
  includeMerchants?: InputMaybe<Scalars["Boolean"]>;
  includeRewards?: InputMaybe<Scalars["Boolean"]>;
  pagination?: InputMaybe<OffsetPaginationInput>;
  sort?: InputMaybe<TransactionsSortInput>;
};

export type QueryActiveAutoPaymentResult =
  | BaseError
  | QueryActiveAutoPaymentSuccess
  | ValidationError;

export type QueryActiveAutoPaymentSuccess = {
  __typename?: "QueryActiveAutoPaymentSuccess";
  data: PaymentSchedule;
};

export type QueryCardArtResult = BaseError | QueryCardArtSuccess | ValidationError;

export type QueryCardArtSuccess = {
  __typename?: "QueryCardArtSuccess";
  data: CardArt;
};

export type QueryCardResult = BaseError | QueryCardSuccess | ValidationError;

export type QueryCardSuccess = {
  __typename?: "QueryCardSuccess";
  data: Card;
};

export type QueryCardsResult = BaseError | QueryCardsSuccess | ValidationError;

export type QueryCardsSuccess = {
  __typename?: "QueryCardsSuccess";
  data: Array<Card>;
};

export type QueryDetokenizedCardResult =
  | BaseError
  | QueryDetokenizedCardSuccess
  | ValidationError;

export type QueryDetokenizedCardSuccess = {
  __typename?: "QueryDetokenizedCardSuccess";
  data: Card;
};

export type QueryDisputeResult = BaseError | QueryDisputeSuccess | ValidationError;

export type QueryDisputeSuccess = {
  __typename?: "QueryDisputeSuccess";
  data: Dispute;
};

export type QueryExternalMerchantResult =
  | BaseError
  | QueryExternalMerchantSuccess
  | ValidationError;

export type QueryExternalMerchantSuccess = {
  __typename?: "QueryExternalMerchantSuccess";
  data: ExternalMerchant;
};

export type QueryOffersResult = BaseError | QueryOffersSuccess | ValidationError;

export type QueryOffersSuccess = {
  __typename?: "QueryOffersSuccess";
  data: Array<Offer>;
};

export type QueryPaymentSchedulesResult =
  | BaseError
  | QueryPaymentSchedulesSuccess
  | ValidationError;

export type QueryPaymentSchedulesSuccess = {
  __typename?: "QueryPaymentSchedulesSuccess";
  data: Array<PaymentSchedule>;
};

export type QueryPrimaryCardResult =
  | BaseError
  | QueryPrimaryCardSuccess
  | ValidationError;

export type QueryPrimaryCardSuccess = {
  __typename?: "QueryPrimaryCardSuccess";
  data: Card;
};

export type QueryStatementResult = BaseError | QueryStatementSuccess | ValidationError;

export type QueryStatementSuccess = {
  __typename?: "QueryStatementSuccess";
  data: Statement;
};

export type QueryStatementsResult = BaseError | QueryStatementsSuccess | ValidationError;

export type QueryStatementsSuccess = {
  __typename?: "QueryStatementsSuccess";
  data: Statements;
};

export type QueryTransactionResult =
  | BaseError
  | QueryTransactionSuccess
  | ValidationError;

export type QueryTransactionSuccess = {
  __typename?: "QueryTransactionSuccess";
  data: Transaction;
};

export type QueryTransactionsResult =
  | BaseError
  | QueryTransactionsSuccess
  | ValidationError;

export type QueryTransactionsSuccess = {
  __typename?: "QueryTransactionsSuccess";
  data: Transactions;
};

export enum RestaurantCity {
  NewYork = "newYork",
}

export type RestaurantOffer = {
  __typename?: "RestaurantOffer";
  city: RestaurantCity;
  location: Scalars["String"];
  primaryImageUrl: Scalars["String"];
  secondaryImageUrl: Scalars["String"];
};

export type Reward = {
  __typename?: "Reward";
  amount: Scalars["Float"];
  applicationMethod: RewardApplicationMethod;
  createdAt: Scalars["DateTime"];
  details: Scalars["String"];
  id: Scalars["Int"];
  offer?: Maybe<Offer>;
  rewardDescription: Scalars["String"];
};

export enum RewardApplicationMethod {
  Cashback = "cashback",
  Points = "points",
}

export type RewardNotificationSettings = {
  __typename?: "RewardNotificationSettings";
  newTransactionReward: Scalars["Boolean"];
};

export type RewardNotificationSettingsInput = {
  newTransactionReward: Scalars["Boolean"];
};

export type Statement = {
  __typename?: "Statement";
  amountDue: Scalars["String"];
  credits: Scalars["String"];
  creditsTotal: Scalars["String"];
  currentBalance: Scalars["String"];
  dueDate: Scalars["DateTime"];
  endDate: Scalars["DateTime"];
  feesTotal: Scalars["String"];
  id: Scalars["String"];
  interestTotal: Scalars["String"];
  minimumAmountDue: Scalars["String"];
  nextStatement: Scalars["DateTime"];
  payments: Scalars["String"];
  paymentsAndCredits: Scalars["String"];
  previousBalance: Scalars["String"];
  previousMinimumAmountDue: Scalars["String"];
  purchaseTotal: Scalars["String"];
  startDate: Scalars["DateTime"];
  statementDate: Scalars["DateTime"];
  statementMinimum: Scalars["String"];
};

export type StatementNotificationSettings = {
  __typename?: "StatementNotificationSettings";
  paymentDue: Scalars["Boolean"];
  paymentReceived: Scalars["Boolean"];
  statementReady: Scalars["Boolean"];
};

export type StatementNotificationSettingsInput = {
  paymentDue: Scalars["Boolean"];
  paymentReceived: Scalars["Boolean"];
  statementReady: Scalars["Boolean"];
};

export type Statements = {
  __typename?: "Statements";
  count: Scalars["Int"];
  nextCursor?: Maybe<Scalars["String"]>;
  previousCursor?: Maybe<Scalars["String"]>;
  statements: Array<Statement>;
};

export type StringCursorPaginationInput = {
  cursor?: InputMaybe<Scalars["String"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
};

export type Transaction = {
  __typename?: "Transaction";
  amountInDollars: Scalars["Float"];
  cardLast4Digits?: Maybe<Scalars["String"]>;
  cardholderId: Scalars["String"];
  creditIndicator: CreditIndicator;
  deserveCardId?: Maybe<Scalars["String"]>;
  deserveCategoryId: Scalars["String"];
  deserveTransactionId: Scalars["String"];
  digitalWallet?: Maybe<DigitalWallet>;
  dispute?: Maybe<Dispute>;
  externalMerchant?: Maybe<ExternalMerchant>;
  hypercardCategoryIconUrl: Scalars["String"];
  id: Scalars["Int"];
  networkData?: Maybe<TransactionNetworkData>;
  posType?: Maybe<Scalars["String"]>;
  reward?: Maybe<TransactionReward>;
  settledAt?: Maybe<Scalars["DateTime"]>;
  status: TransactionStatus;
  transactedAt?: Maybe<Scalars["DateTime"]>;
  transactionLocality?: Maybe<TransactionLocality>;
  type: TransactionType;
};

export enum TransactionLocality {
  International = "international",
  Regular = "regular",
}

export type TransactionNetworkData = {
  __typename?: "TransactionNetworkData";
  cardAcceptorIdCode?: Maybe<Scalars["String"]>;
  cardAcceptorNameLocation?: Maybe<Scalars["String"]>;
  cardAcceptorTerminalId?: Maybe<Scalars["String"]>;
  mccCategoryCode?: Maybe<Scalars["String"]>;
  merchantCategoryCode?: Maybe<Scalars["String"]>;
  merchantCategoryCodeDescription?: Maybe<Scalars["String"]>;
  merchantCity?: Maybe<Scalars["String"]>;
  merchantCountry?: Maybe<Scalars["String"]>;
  merchantId?: Maybe<Scalars["String"]>;
  merchantName?: Maybe<Scalars["String"]>;
  merchantState?: Maybe<Scalars["String"]>;
  merchantStreetAddress?: Maybe<Scalars["String"]>;
  merchantZipcode?: Maybe<Scalars["String"]>;
  processorDeclineCode?: Maybe<Scalars["String"]>;
  processorDeclineReason?: Maybe<Scalars["String"]>;
};

export type TransactionNotificationSettings = {
  __typename?: "TransactionNotificationSettings";
  purchaseNotification: Scalars["Boolean"];
};

export type TransactionNotificationSettingsInput = {
  purchaseNotification: Scalars["Boolean"];
};

export type TransactionReward = {
  __typename?: "TransactionReward";
  cashbackReward?: Maybe<Reward>;
  pointsReward?: Maybe<Reward>;
};

export enum TransactionSortField {
  Amount = "amount",
  TransactedAt = "transactedAt",
}

export enum TransactionStatus {
  Pending = "pending",
  Reversed = "reversed",
  Settled = "settled",
}

export enum TransactionType {
  BankCashback = "bankCashback",
  BankCashbackAdjustment = "bankCashbackAdjustment",
  CashAdvance = "cashAdvance",
  Dispute = "dispute",
  Fee = "fee",
  FeeAdjustment = "feeAdjustment",
  Payment = "payment",
  Refund = "refund",
  Regular = "regular",
}

export type Transactions = {
  __typename?: "Transactions";
  count: Scalars["Int"];
  hasMore: Scalars["Boolean"];
  paymentTransactions: Array<PaymentTransaction>;
  transactions: Array<Transaction>;
};

export type TransactionsFilterInput = {
  amountLessThan?: InputMaybe<Scalars["Float"]>;
  amountMoreThan?: InputMaybe<Scalars["Float"]>;
  creditIndicator?: InputMaybe<Array<CreditIndicator>>;
  digitalWallet?: InputMaybe<Array<DigitalWallet>>;
  flaggedForReimbursement?: InputMaybe<Scalars["Boolean"]>;
  merchantName?: InputMaybe<Scalars["String"]>;
  settledAfter?: InputMaybe<Scalars["DateTime"]>;
  settledBefore?: InputMaybe<Scalars["DateTime"]>;
  status?: InputMaybe<Array<TransactionStatus>>;
  transactedAfter?: InputMaybe<Scalars["DateTime"]>;
  transactedBefore?: InputMaybe<Scalars["DateTime"]>;
  transactionLocality?: InputMaybe<Array<TransactionLocality>>;
  type?: InputMaybe<Array<TransactionType>>;
};

export type TransactionsSortInput = {
  ascendingDirection: Scalars["Boolean"];
  field: TransactionSortField;
};

export type UpdateCardholderAddressInput = {
  addressLine1: Scalars["String"];
  addressLine2: Scalars["String"];
  city: Scalars["String"];
  state: Scalars["String"];
  type: AddressType;
  zip: Scalars["String"];
};

export type UpsertAutoPaymentScheduleInput = {
  paymentMethodId: Scalars["String"];
  type: PaymentType;
};

export type ValidationError = Error & {
  __typename?: "ValidationError";
  code: Scalars["String"];
  fieldErrors?: Maybe<Array<ZodFieldError>>;
  message: Scalars["String"];
};

export type WaitlistUser = {
  __typename?: "WaitlistUser";
  address?: Maybe<Address>;
  dateOfBirth: Scalars["DateTime"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  id: Scalars["ID"];
  lastName: Scalars["String"];
  phoneNumber: Scalars["String"];
  ssn: Scalars["String"];
};

export type WaitlistUserApplicationStartedContext = {
  __typename?: "WaitlistUserApplicationStartedContext";
  applicationId: Scalars["String"];
  waitlistUser: WaitlistUser;
};

export type ZodFieldError = {
  __typename?: "ZodFieldError";
  message: Scalars["String"];
  path: Array<Scalars["String"]>;
};

export type SendOtpMutationVariables = Exact<{
  phoneNumber: Scalars["String"];
}>;

export type SendOtpMutation = {
  __typename?: "Mutation";
  sendOTP:
    | { __typename?: "BaseError"; code: string; message: string }
    | { __typename?: "MutationSendOTPSuccess"; data: string }
    | { __typename?: "ValidationError"; code: string; message: string };
};

export type SubmitFeedbackMutationVariables = Exact<{
  feedback: Scalars["String"];
}>;

export type SubmitFeedbackMutation = {
  __typename?: "Mutation";
  submitFeedback:
    | { __typename?: "BaseError"; code: string; message: string }
    | { __typename?: "MutationSubmitFeedbackSuccess"; data: boolean }
    | { __typename?: "ValidationError"; code: string; message: string };
};

export type GetAccountOpenDateQueryVariables = Exact<{ [key: string]: never }>;

export type GetAccountOpenDateQuery = {
  __typename?: "Query";
  cardholder?: { __typename?: "Cardholder"; employmentStartDate?: any | null } | null;
};

export type GetAccountDetailsForHomeQueryVariables = Exact<{ [key: string]: never }>;

export type GetAccountDetailsForHomeQuery = {
  __typename?: "Query";
  account: {
    __typename?: "Account";
    creditLimit: number;
    currentBalance: number;
    dueDateUtc: any;
  };
  cardholder?: { __typename?: "Cardholder"; firstName: string; lastName: string } | null;
  achPaymentMethods: Array<{ __typename?: "PaymentMethod"; id: string }>;
  cardArt:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryCardArtSuccess";
        data: { __typename?: "CardArt"; backImageUrl: string; frontImageUrl: string };
      }
    | { __typename?: "ValidationError" };
};

export type GetAccountBalanceQueryVariables = Exact<{ [key: string]: never }>;

export type GetAccountBalanceQuery = {
  __typename?: "Query";
  account: { __typename?: "Account"; currentBalance: number };
};

export type GetOffersForMembershipQueryVariables = Exact<{
  category?: InputMaybe<OfferCategory>;
}>;

export type GetOffersForMembershipQuery = {
  __typename?: "Query";
  offers:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryOffersSuccess";
        data: Array<{
          __typename?: "Offer";
          title: string;
          details: string;
          longDetails?: string | null;
          identifier: string;
          hypercardMerchant?: {
            __typename?: "HypercardMerchant";
            logoImageUrl: string;
          } | null;
        }>;
      }
    | { __typename?: "ValidationError" };
};

export type GetRestaurantsQueryVariables = Exact<{
  restaurantCity?: InputMaybe<RestaurantCity>;
}>;

export type GetRestaurantsQuery = {
  __typename?: "Query";
  offers:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryOffersSuccess";
        data: Array<{
          __typename?: "Offer";
          title: string;
          details: string;
          identifier: string;
          restaurantOffer?: {
            __typename?: "RestaurantOffer";
            primaryImageUrl: string;
            secondaryImageUrl: string;
            location: string;
          } | null;
        }>;
      }
    | { __typename?: "ValidationError" };
};

export type CreateAchPaymentMethodMutationVariables = Exact<{
  paymentMethodInput: CreateAchPaymentMethodInput;
}>;

export type CreateAchPaymentMethodMutation = {
  __typename?: "Mutation";
  createACHPaymentMethod:
    | { __typename?: "BaseError"; code: string; message: string }
    | {
        __typename?: "MutationCreateACHPaymentMethodSuccess";
        data: { __typename?: "PaymentMethod"; id: string };
      }
    | {
        __typename?: "ValidationError";
        code: string;
        message: string;
        fieldErrors?: Array<{
          __typename?: "ZodFieldError";
          message: string;
          path: Array<string>;
        }> | null;
      };
};

export type CreateInstantPaymentMutationVariables = Exact<{
  paymentMethodInput: CreateInstantPaymentInput;
}>;

export type CreateInstantPaymentMutation = {
  __typename?: "Mutation";
  createInstantPaymentSchedule:
    | { __typename?: "BaseError"; code: string; message: string }
    | {
        __typename?: "MutationCreateInstantPaymentScheduleSuccess";
        data: {
          __typename?: "PaymentSchedule";
          amount?: string | null;
          paymentDate?: any | null;
          methodId: string;
          id: string;
        };
      }
    | {
        __typename?: "ValidationError";
        code: string;
        message: string;
        fieldErrors?: Array<{
          __typename?: "ZodFieldError";
          message: string;
          path: Array<string>;
        }> | null;
      };
};

export type CreateDueDatePaymentScheduleMutationVariables = Exact<{
  methodId: Scalars["String"];
  type: PaymentType;
}>;

export type CreateDueDatePaymentScheduleMutation = {
  __typename?: "Mutation";
  createDueDatePaymentSchedule:
    | { __typename?: "BaseError" }
    | {
        __typename?: "MutationCreateDueDatePaymentScheduleSuccess";
        data: { __typename?: "PaymentSchedule"; methodId: string };
      }
    | { __typename?: "ValidationError" };
};

export type DeletePaymentScheduleMutationVariables = Exact<{
  scheduleId: Scalars["String"];
}>;

export type DeletePaymentScheduleMutation = {
  __typename?: "Mutation";
  deletePaymentSchedule:
    | { __typename?: "BaseError" }
    | { __typename?: "MutationDeletePaymentScheduleSuccess"; data: boolean }
    | { __typename?: "ValidationError" };
};

export type GetCurrentStatementPaymentOptionsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetCurrentStatementPaymentOptionsQuery = {
  __typename?: "Query";
  account: {
    __typename?: "Account";
    currentBalance: number;
    dueAmount: number;
    minimumPayment: number;
  };
};

export type GetAchPaymentMethodsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAchPaymentMethodsQuery = {
  __typename?: "Query";
  achPaymentMethods: Array<{
    __typename?: "PaymentMethod";
    id: string;
    accountLast4Digits: string;
    accountType: BankAccountType;
    bankName: string;
    status: PaymentMethodStatus;
  }>;
};

export type GetPaymentSchedulesQueryVariables = Exact<{
  status?: InputMaybe<PaymentScheduleStatus>;
  frequency?: InputMaybe<PaymentScheduleFrequency>;
}>;

export type GetPaymentSchedulesQuery = {
  __typename?: "Query";
  paymentSchedules:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryPaymentSchedulesSuccess";
        data: Array<{
          __typename?: "PaymentSchedule";
          amount?: string | null;
          status: PaymentScheduleStatus;
          paymentDate?: any | null;
          type: PaymentType;
          methodId: string;
          frequency: PaymentScheduleFrequency;
          id: string;
        }>;
      }
    | { __typename?: "ValidationError" };
};

export type GetTransactionsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars["Int"]>;
  pageSize?: InputMaybe<Scalars["Int"]>;
  merchantName?: InputMaybe<Scalars["String"]>;
  filterType?: InputMaybe<Array<TransactionType> | TransactionType>;
  transactedAfter?: InputMaybe<Scalars["DateTime"]>;
  sort: TransactionsSortInput;
}>;

export type GetTransactionsQuery = {
  __typename?: "Query";
  transactions:
    | { __typename?: "BaseError" }
    | {
        __typename: "QueryTransactionsSuccess";
        data: {
          __typename?: "Transactions";
          hasMore: boolean;
          transactions: Array<{
            __typename?: "Transaction";
            transactedAt?: any | null;
            amountInDollars: number;
            id: number;
            status: TransactionStatus;
            hypercardCategoryIconUrl: string;
            externalMerchant?: {
              __typename?: "ExternalMerchant";
              displayName: string;
            } | null;
          }>;
        };
      }
    | { __typename?: "ValidationError" };
};

export type GetTransactionByIdQueryVariables = Exact<{
  transactionId: Scalars["Int"];
}>;

export type GetTransactionByIdQuery = {
  __typename?: "Query";
  transaction?:
    | { __typename?: "BaseError" }
    | {
        __typename?: "QueryTransactionSuccess";
        data: {
          __typename?: "Transaction";
          amountInDollars: number;
          cardLast4Digits?: string | null;
          transactedAt?: any | null;
          status: TransactionStatus;
          settledAt?: any | null;
          type: TransactionType;
          externalMerchant?: {
            __typename?: "ExternalMerchant";
            displayName: string;
            category: { __typename?: "Category"; name: string };
          } | null;
          reward?: {
            __typename?: "TransactionReward";
            cashbackReward?: {
              __typename?: "Reward";
              rewardDescription: string;
              amount: number;
            } | null;
            pointsReward?: {
              __typename?: "Reward";
              rewardDescription: string;
              amount: number;
            } | null;
          } | null;
        };
      }
    | { __typename?: "ValidationError" }
    | null;
};

export const SendOtpDocument = gql`
  mutation SendOtp($phoneNumber: String!) {
    sendOTP(phoneNumber: $phoneNumber) {
      ... on MutationSendOTPSuccess {
        data
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
export type SendOtpMutationFn = Apollo.MutationFunction<
  SendOtpMutation,
  SendOtpMutationVariables
>;

/**
 * __useSendOtpMutation__
 *
 * To run a mutation, you first call `useSendOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendOtpMutation, { data, loading, error }] = useSendOtpMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useSendOtpMutation(
  baseOptions?: Apollo.MutationHookOptions<SendOtpMutation, SendOtpMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SendOtpMutation, SendOtpMutationVariables>(
    SendOtpDocument,
    options,
  );
}
export type SendOtpMutationHookResult = ReturnType<typeof useSendOtpMutation>;
export type SendOtpMutationResult = Apollo.MutationResult<SendOtpMutation>;
export type SendOtpMutationOptions = Apollo.BaseMutationOptions<
  SendOtpMutation,
  SendOtpMutationVariables
>;
export const SubmitFeedbackDocument = gql`
  mutation SubmitFeedback($feedback: String!) {
    submitFeedback(feedback: $feedback) {
      ... on MutationSubmitFeedbackSuccess {
        data
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
export type SubmitFeedbackMutationFn = Apollo.MutationFunction<
  SubmitFeedbackMutation,
  SubmitFeedbackMutationVariables
>;

/**
 * __useSubmitFeedbackMutation__
 *
 * To run a mutation, you first call `useSubmitFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitFeedbackMutation, { data, loading, error }] = useSubmitFeedbackMutation({
 *   variables: {
 *      feedback: // value for 'feedback'
 *   },
 * });
 */
export function useSubmitFeedbackMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SubmitFeedbackMutation,
    SubmitFeedbackMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SubmitFeedbackMutation, SubmitFeedbackMutationVariables>(
    SubmitFeedbackDocument,
    options,
  );
}
export type SubmitFeedbackMutationHookResult = ReturnType<
  typeof useSubmitFeedbackMutation
>;
export type SubmitFeedbackMutationResult = Apollo.MutationResult<SubmitFeedbackMutation>;
export type SubmitFeedbackMutationOptions = Apollo.BaseMutationOptions<
  SubmitFeedbackMutation,
  SubmitFeedbackMutationVariables
>;
export const GetAccountOpenDateDocument = gql`
  query GetAccountOpenDate {
    cardholder @persist {
      employmentStartDate
    }
  }
`;

/**
 * __useGetAccountOpenDateQuery__
 *
 * To run a query within a React component, call `useGetAccountOpenDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountOpenDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountOpenDateQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccountOpenDateQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAccountOpenDateQuery,
    GetAccountOpenDateQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAccountOpenDateQuery, GetAccountOpenDateQueryVariables>(
    GetAccountOpenDateDocument,
    options,
  );
}
export function useGetAccountOpenDateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAccountOpenDateQuery,
    GetAccountOpenDateQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAccountOpenDateQuery, GetAccountOpenDateQueryVariables>(
    GetAccountOpenDateDocument,
    options,
  );
}
export type GetAccountOpenDateQueryHookResult = ReturnType<
  typeof useGetAccountOpenDateQuery
>;
export type GetAccountOpenDateLazyQueryHookResult = ReturnType<
  typeof useGetAccountOpenDateLazyQuery
>;
export type GetAccountOpenDateQueryResult = Apollo.QueryResult<
  GetAccountOpenDateQuery,
  GetAccountOpenDateQueryVariables
>;
export const GetAccountDetailsForHomeDocument = gql`
  query GetAccountDetailsForHome {
    account {
      creditLimit
      currentBalance
      dueDateUtc
    }
    cardholder {
      firstName
      lastName
    }
    achPaymentMethods {
      id
    }
    cardArt {
      ... on QueryCardArtSuccess {
        data {
          backImageUrl
          frontImageUrl
        }
      }
    }
  }
`;

/**
 * __useGetAccountDetailsForHomeQuery__
 *
 * To run a query within a React component, call `useGetAccountDetailsForHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountDetailsForHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountDetailsForHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccountDetailsForHomeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAccountDetailsForHomeQuery,
    GetAccountDetailsForHomeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAccountDetailsForHomeQuery,
    GetAccountDetailsForHomeQueryVariables
  >(GetAccountDetailsForHomeDocument, options);
}
export function useGetAccountDetailsForHomeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAccountDetailsForHomeQuery,
    GetAccountDetailsForHomeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAccountDetailsForHomeQuery,
    GetAccountDetailsForHomeQueryVariables
  >(GetAccountDetailsForHomeDocument, options);
}
export type GetAccountDetailsForHomeQueryHookResult = ReturnType<
  typeof useGetAccountDetailsForHomeQuery
>;
export type GetAccountDetailsForHomeLazyQueryHookResult = ReturnType<
  typeof useGetAccountDetailsForHomeLazyQuery
>;
export type GetAccountDetailsForHomeQueryResult = Apollo.QueryResult<
  GetAccountDetailsForHomeQuery,
  GetAccountDetailsForHomeQueryVariables
>;
export const GetAccountBalanceDocument = gql`
  query GetAccountBalance {
    account {
      currentBalance
    }
  }
`;

/**
 * __useGetAccountBalanceQuery__
 *
 * To run a query within a React component, call `useGetAccountBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountBalanceQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccountBalanceQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAccountBalanceQuery,
    GetAccountBalanceQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAccountBalanceQuery, GetAccountBalanceQueryVariables>(
    GetAccountBalanceDocument,
    options,
  );
}
export function useGetAccountBalanceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAccountBalanceQuery,
    GetAccountBalanceQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAccountBalanceQuery, GetAccountBalanceQueryVariables>(
    GetAccountBalanceDocument,
    options,
  );
}
export type GetAccountBalanceQueryHookResult = ReturnType<
  typeof useGetAccountBalanceQuery
>;
export type GetAccountBalanceLazyQueryHookResult = ReturnType<
  typeof useGetAccountBalanceLazyQuery
>;
export type GetAccountBalanceQueryResult = Apollo.QueryResult<
  GetAccountBalanceQuery,
  GetAccountBalanceQueryVariables
>;
export const GetOffersForMembershipDocument = gql`
  query GetOffersForMembership($category: OfferCategory) {
    offers(category: $category) {
      ... on QueryOffersSuccess {
        data {
          title
          details
          longDetails
          identifier
          hypercardMerchant {
            logoImageUrl
          }
        }
      }
    }
  }
`;

/**
 * __useGetOffersForMembershipQuery__
 *
 * To run a query within a React component, call `useGetOffersForMembershipQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOffersForMembershipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOffersForMembershipQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useGetOffersForMembershipQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetOffersForMembershipQuery,
    GetOffersForMembershipQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetOffersForMembershipQuery,
    GetOffersForMembershipQueryVariables
  >(GetOffersForMembershipDocument, options);
}
export function useGetOffersForMembershipLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOffersForMembershipQuery,
    GetOffersForMembershipQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetOffersForMembershipQuery,
    GetOffersForMembershipQueryVariables
  >(GetOffersForMembershipDocument, options);
}
export type GetOffersForMembershipQueryHookResult = ReturnType<
  typeof useGetOffersForMembershipQuery
>;
export type GetOffersForMembershipLazyQueryHookResult = ReturnType<
  typeof useGetOffersForMembershipLazyQuery
>;
export type GetOffersForMembershipQueryResult = Apollo.QueryResult<
  GetOffersForMembershipQuery,
  GetOffersForMembershipQueryVariables
>;
export const GetRestaurantsDocument = gql`
  query GetRestaurants($restaurantCity: RestaurantCity) {
    offers(restaurantCity: $restaurantCity, onlyRestaurantOffers: true) {
      ... on QueryOffersSuccess {
        data {
          title
          details
          identifier
          restaurantOffer {
            primaryImageUrl
            secondaryImageUrl
            location
          }
        }
      }
    }
  }
`;

/**
 * __useGetRestaurantsQuery__
 *
 * To run a query within a React component, call `useGetRestaurantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRestaurantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRestaurantsQuery({
 *   variables: {
 *      restaurantCity: // value for 'restaurantCity'
 *   },
 * });
 */
export function useGetRestaurantsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetRestaurantsQuery,
    GetRestaurantsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetRestaurantsQuery, GetRestaurantsQueryVariables>(
    GetRestaurantsDocument,
    options,
  );
}
export function useGetRestaurantsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetRestaurantsQuery,
    GetRestaurantsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetRestaurantsQuery, GetRestaurantsQueryVariables>(
    GetRestaurantsDocument,
    options,
  );
}
export type GetRestaurantsQueryHookResult = ReturnType<typeof useGetRestaurantsQuery>;
export type GetRestaurantsLazyQueryHookResult = ReturnType<
  typeof useGetRestaurantsLazyQuery
>;
export type GetRestaurantsQueryResult = Apollo.QueryResult<
  GetRestaurantsQuery,
  GetRestaurantsQueryVariables
>;
export const CreateAchPaymentMethodDocument = gql`
  mutation CreateACHPaymentMethod($paymentMethodInput: CreateACHPaymentMethodInput!) {
    createACHPaymentMethod(paymentMethodInput: $paymentMethodInput) {
      ... on MutationCreateACHPaymentMethodSuccess {
        data {
          id
        }
      }
      ... on ValidationError {
        code
        fieldErrors {
          message
          path
        }
        message
      }
      ... on BaseError {
        code
        message
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
export type CreateAchPaymentMethodMutationFn = Apollo.MutationFunction<
  CreateAchPaymentMethodMutation,
  CreateAchPaymentMethodMutationVariables
>;

/**
 * __useCreateAchPaymentMethodMutation__
 *
 * To run a mutation, you first call `useCreateAchPaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAchPaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAchPaymentMethodMutation, { data, loading, error }] = useCreateAchPaymentMethodMutation({
 *   variables: {
 *      paymentMethodInput: // value for 'paymentMethodInput'
 *   },
 * });
 */
export function useCreateAchPaymentMethodMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAchPaymentMethodMutation,
    CreateAchPaymentMethodMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateAchPaymentMethodMutation,
    CreateAchPaymentMethodMutationVariables
  >(CreateAchPaymentMethodDocument, options);
}
export type CreateAchPaymentMethodMutationHookResult = ReturnType<
  typeof useCreateAchPaymentMethodMutation
>;
export type CreateAchPaymentMethodMutationResult =
  Apollo.MutationResult<CreateAchPaymentMethodMutation>;
export type CreateAchPaymentMethodMutationOptions = Apollo.BaseMutationOptions<
  CreateAchPaymentMethodMutation,
  CreateAchPaymentMethodMutationVariables
>;
export const CreateInstantPaymentDocument = gql`
  mutation CreateInstantPayment($paymentMethodInput: CreateInstantPaymentInput!) {
    createInstantPaymentSchedule(input: $paymentMethodInput) {
      ... on MutationCreateInstantPaymentScheduleSuccess {
        data {
          amount
          paymentDate
          methodId
          id
        }
      }
      ... on ValidationError {
        code
        fieldErrors {
          message
          path
        }
        message
      }
      ... on BaseError {
        code
        message
      }
      ... on Error {
        code
        message
      }
    }
  }
`;
export type CreateInstantPaymentMutationFn = Apollo.MutationFunction<
  CreateInstantPaymentMutation,
  CreateInstantPaymentMutationVariables
>;

/**
 * __useCreateInstantPaymentMutation__
 *
 * To run a mutation, you first call `useCreateInstantPaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInstantPaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInstantPaymentMutation, { data, loading, error }] = useCreateInstantPaymentMutation({
 *   variables: {
 *      paymentMethodInput: // value for 'paymentMethodInput'
 *   },
 * });
 */
export function useCreateInstantPaymentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateInstantPaymentMutation,
    CreateInstantPaymentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateInstantPaymentMutation,
    CreateInstantPaymentMutationVariables
  >(CreateInstantPaymentDocument, options);
}
export type CreateInstantPaymentMutationHookResult = ReturnType<
  typeof useCreateInstantPaymentMutation
>;
export type CreateInstantPaymentMutationResult =
  Apollo.MutationResult<CreateInstantPaymentMutation>;
export type CreateInstantPaymentMutationOptions = Apollo.BaseMutationOptions<
  CreateInstantPaymentMutation,
  CreateInstantPaymentMutationVariables
>;
export const CreateDueDatePaymentScheduleDocument = gql`
  mutation CreateDueDatePaymentSchedule($methodId: String!, $type: PaymentType!) {
    createDueDatePaymentSchedule(input: { methodId: $methodId, type: $type }) {
      ... on MutationCreateDueDatePaymentScheduleSuccess {
        data {
          methodId
        }
      }
    }
  }
`;
export type CreateDueDatePaymentScheduleMutationFn = Apollo.MutationFunction<
  CreateDueDatePaymentScheduleMutation,
  CreateDueDatePaymentScheduleMutationVariables
>;

/**
 * __useCreateDueDatePaymentScheduleMutation__
 *
 * To run a mutation, you first call `useCreateDueDatePaymentScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDueDatePaymentScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDueDatePaymentScheduleMutation, { data, loading, error }] = useCreateDueDatePaymentScheduleMutation({
 *   variables: {
 *      methodId: // value for 'methodId'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateDueDatePaymentScheduleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateDueDatePaymentScheduleMutation,
    CreateDueDatePaymentScheduleMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateDueDatePaymentScheduleMutation,
    CreateDueDatePaymentScheduleMutationVariables
  >(CreateDueDatePaymentScheduleDocument, options);
}
export type CreateDueDatePaymentScheduleMutationHookResult = ReturnType<
  typeof useCreateDueDatePaymentScheduleMutation
>;
export type CreateDueDatePaymentScheduleMutationResult =
  Apollo.MutationResult<CreateDueDatePaymentScheduleMutation>;
export type CreateDueDatePaymentScheduleMutationOptions = Apollo.BaseMutationOptions<
  CreateDueDatePaymentScheduleMutation,
  CreateDueDatePaymentScheduleMutationVariables
>;
export const DeletePaymentScheduleDocument = gql`
  mutation DeletePaymentSchedule($scheduleId: String!) {
    deletePaymentSchedule(scheduleId: $scheduleId) {
      ... on MutationDeletePaymentScheduleSuccess {
        data
      }
    }
  }
`;
export type DeletePaymentScheduleMutationFn = Apollo.MutationFunction<
  DeletePaymentScheduleMutation,
  DeletePaymentScheduleMutationVariables
>;

/**
 * __useDeletePaymentScheduleMutation__
 *
 * To run a mutation, you first call `useDeletePaymentScheduleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePaymentScheduleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePaymentScheduleMutation, { data, loading, error }] = useDeletePaymentScheduleMutation({
 *   variables: {
 *      scheduleId: // value for 'scheduleId'
 *   },
 * });
 */
export function useDeletePaymentScheduleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeletePaymentScheduleMutation,
    DeletePaymentScheduleMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeletePaymentScheduleMutation,
    DeletePaymentScheduleMutationVariables
  >(DeletePaymentScheduleDocument, options);
}
export type DeletePaymentScheduleMutationHookResult = ReturnType<
  typeof useDeletePaymentScheduleMutation
>;
export type DeletePaymentScheduleMutationResult =
  Apollo.MutationResult<DeletePaymentScheduleMutation>;
export type DeletePaymentScheduleMutationOptions = Apollo.BaseMutationOptions<
  DeletePaymentScheduleMutation,
  DeletePaymentScheduleMutationVariables
>;
export const GetCurrentStatementPaymentOptionsDocument = gql`
  query GetCurrentStatementPaymentOptions {
    account {
      currentBalance
      dueAmount
      minimumPayment
    }
  }
`;

/**
 * __useGetCurrentStatementPaymentOptionsQuery__
 *
 * To run a query within a React component, call `useGetCurrentStatementPaymentOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentStatementPaymentOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentStatementPaymentOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentStatementPaymentOptionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCurrentStatementPaymentOptionsQuery,
    GetCurrentStatementPaymentOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCurrentStatementPaymentOptionsQuery,
    GetCurrentStatementPaymentOptionsQueryVariables
  >(GetCurrentStatementPaymentOptionsDocument, options);
}
export function useGetCurrentStatementPaymentOptionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCurrentStatementPaymentOptionsQuery,
    GetCurrentStatementPaymentOptionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCurrentStatementPaymentOptionsQuery,
    GetCurrentStatementPaymentOptionsQueryVariables
  >(GetCurrentStatementPaymentOptionsDocument, options);
}
export type GetCurrentStatementPaymentOptionsQueryHookResult = ReturnType<
  typeof useGetCurrentStatementPaymentOptionsQuery
>;
export type GetCurrentStatementPaymentOptionsLazyQueryHookResult = ReturnType<
  typeof useGetCurrentStatementPaymentOptionsLazyQuery
>;
export type GetCurrentStatementPaymentOptionsQueryResult = Apollo.QueryResult<
  GetCurrentStatementPaymentOptionsQuery,
  GetCurrentStatementPaymentOptionsQueryVariables
>;
export const GetAchPaymentMethodsDocument = gql`
  query GetACHPaymentMethods {
    achPaymentMethods {
      id
      accountLast4Digits
      accountType
      bankName
      status
    }
  }
`;

/**
 * __useGetAchPaymentMethodsQuery__
 *
 * To run a query within a React component, call `useGetAchPaymentMethodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAchPaymentMethodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAchPaymentMethodsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAchPaymentMethodsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAchPaymentMethodsQuery,
    GetAchPaymentMethodsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAchPaymentMethodsQuery, GetAchPaymentMethodsQueryVariables>(
    GetAchPaymentMethodsDocument,
    options,
  );
}
export function useGetAchPaymentMethodsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAchPaymentMethodsQuery,
    GetAchPaymentMethodsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAchPaymentMethodsQuery,
    GetAchPaymentMethodsQueryVariables
  >(GetAchPaymentMethodsDocument, options);
}
export type GetAchPaymentMethodsQueryHookResult = ReturnType<
  typeof useGetAchPaymentMethodsQuery
>;
export type GetAchPaymentMethodsLazyQueryHookResult = ReturnType<
  typeof useGetAchPaymentMethodsLazyQuery
>;
export type GetAchPaymentMethodsQueryResult = Apollo.QueryResult<
  GetAchPaymentMethodsQuery,
  GetAchPaymentMethodsQueryVariables
>;
export const GetPaymentSchedulesDocument = gql`
  query GetPaymentSchedules(
    $status: PaymentScheduleStatus
    $frequency: PaymentScheduleFrequency
  ) {
    paymentSchedules(status: $status, frequency: $frequency) {
      ... on QueryPaymentSchedulesSuccess {
        data {
          amount
          status
          paymentDate
          type
          methodId
          frequency
          id
        }
      }
    }
  }
`;

/**
 * __useGetPaymentSchedulesQuery__
 *
 * To run a query within a React component, call `useGetPaymentSchedulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentSchedulesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentSchedulesQuery({
 *   variables: {
 *      status: // value for 'status'
 *      frequency: // value for 'frequency'
 *   },
 * });
 */
export function useGetPaymentSchedulesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetPaymentSchedulesQuery,
    GetPaymentSchedulesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPaymentSchedulesQuery, GetPaymentSchedulesQueryVariables>(
    GetPaymentSchedulesDocument,
    options,
  );
}
export function useGetPaymentSchedulesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPaymentSchedulesQuery,
    GetPaymentSchedulesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPaymentSchedulesQuery, GetPaymentSchedulesQueryVariables>(
    GetPaymentSchedulesDocument,
    options,
  );
}
export type GetPaymentSchedulesQueryHookResult = ReturnType<
  typeof useGetPaymentSchedulesQuery
>;
export type GetPaymentSchedulesLazyQueryHookResult = ReturnType<
  typeof useGetPaymentSchedulesLazyQuery
>;
export type GetPaymentSchedulesQueryResult = Apollo.QueryResult<
  GetPaymentSchedulesQuery,
  GetPaymentSchedulesQueryVariables
>;
export const GetTransactionsDocument = gql`
  query GetTransactions(
    $offset: Int
    $pageSize: Int
    $merchantName: String
    $filterType: [TransactionType!]
    $transactedAfter: DateTime
    $sort: TransactionsSortInput!
  ) {
    transactions(
      pagination: { offset: $offset, pageSize: $pageSize }
      includeMerchants: true
      filters: {
        merchantName: $merchantName
        type: $filterType
        transactedAfter: $transactedAfter
      }
      sort: $sort
    ) {
      ... on QueryTransactionsSuccess {
        __typename
        data {
          hasMore
          transactions {
            transactedAt
            amountInDollars
            id
            status
            hypercardCategoryIconUrl
            externalMerchant {
              displayName
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetTransactionsQuery__
 *
 * To run a query within a React component, call `useGetTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      pageSize: // value for 'pageSize'
 *      merchantName: // value for 'merchantName'
 *      filterType: // value for 'filterType'
 *      transactedAfter: // value for 'transactedAfter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetTransactionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTransactionsQuery,
    GetTransactionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(
    GetTransactionsDocument,
    options,
  );
}
export function useGetTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTransactionsQuery,
    GetTransactionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTransactionsQuery, GetTransactionsQueryVariables>(
    GetTransactionsDocument,
    options,
  );
}
export type GetTransactionsQueryHookResult = ReturnType<typeof useGetTransactionsQuery>;
export type GetTransactionsLazyQueryHookResult = ReturnType<
  typeof useGetTransactionsLazyQuery
>;
export type GetTransactionsQueryResult = Apollo.QueryResult<
  GetTransactionsQuery,
  GetTransactionsQueryVariables
>;
export const GetTransactionByIdDocument = gql`
  query GetTransactionById($transactionId: Int!) {
    transaction(
      transactionId: $transactionId
      includeMerchant: true
      includeReward: true
    ) {
      ... on QueryTransactionSuccess {
        data {
          amountInDollars
          cardLast4Digits
          transactedAt
          externalMerchant {
            category {
              name
            }
            displayName
          }
          reward {
            cashbackReward {
              rewardDescription
              amount
            }
            pointsReward {
              rewardDescription
              amount
            }
          }
          status
          settledAt
          type
        }
      }
    }
  }
`;

/**
 * __useGetTransactionByIdQuery__
 *
 * To run a query within a React component, call `useGetTransactionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionByIdQuery({
 *   variables: {
 *      transactionId: // value for 'transactionId'
 *   },
 * });
 */
export function useGetTransactionByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetTransactionByIdQuery,
    GetTransactionByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTransactionByIdQuery, GetTransactionByIdQueryVariables>(
    GetTransactionByIdDocument,
    options,
  );
}
export function useGetTransactionByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTransactionByIdQuery,
    GetTransactionByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTransactionByIdQuery, GetTransactionByIdQueryVariables>(
    GetTransactionByIdDocument,
    options,
  );
}
export type GetTransactionByIdQueryHookResult = ReturnType<
  typeof useGetTransactionByIdQuery
>;
export type GetTransactionByIdLazyQueryHookResult = ReturnType<
  typeof useGetTransactionByIdLazyQuery
>;
export type GetTransactionByIdQueryResult = Apollo.QueryResult<
  GetTransactionByIdQuery,
  GetTransactionByIdQueryVariables
>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    Error: ["BaseError", "ValidationError"],
    MutationActivateCardResult: [
      "BaseError",
      "MutationActivateCardSuccess",
      "ValidationError",
    ],
    MutationCancelCardResult: [
      "BaseError",
      "MutationCancelCardSuccess",
      "ValidationError",
    ],
    MutationCompletePhoneNumberUpdateResult: [
      "BaseError",
      "MutationCompletePhoneNumberUpdateSuccess",
      "ValidationError",
    ],
    MutationCreateACHPaymentMethodResult: [
      "BaseError",
      "MutationCreateACHPaymentMethodSuccess",
      "ValidationError",
    ],
    MutationCreateDisputeResult: [
      "BaseError",
      "MutationCreateDisputeSuccess",
      "ValidationError",
    ],
    MutationCreateDueDatePaymentScheduleResult: [
      "BaseError",
      "MutationCreateDueDatePaymentScheduleSuccess",
      "ValidationError",
    ],
    MutationCreateInstantPaymentScheduleResult: [
      "BaseError",
      "MutationCreateInstantPaymentScheduleSuccess",
      "ValidationError",
    ],
    MutationDeletePaymentMethodResult: [
      "BaseError",
      "MutationDeletePaymentMethodSuccess",
      "ValidationError",
    ],
    MutationDeletePaymentScheduleResult: [
      "BaseError",
      "MutationDeletePaymentScheduleSuccess",
      "ValidationError",
    ],
    MutationRedeemPointsResult: [
      "BaseError",
      "MutationRedeemPointsSuccess",
      "ValidationError",
    ],
    MutationReplaceCardResult: [
      "BaseError",
      "MutationReplaceCardSuccess",
      "ValidationError",
    ],
    MutationReportCardFraudResult: [
      "BaseError",
      "MutationReportCardFraudSuccess",
      "ValidationError",
    ],
    MutationReportLostOrStolenCardResult: [
      "BaseError",
      "MutationReportLostOrStolenCardSuccess",
      "ValidationError",
    ],
    MutationResolveDisputeResult: [
      "BaseError",
      "MutationResolveDisputeSuccess",
      "ValidationError",
    ],
    MutationSendOTPResult: ["BaseError", "MutationSendOTPSuccess", "ValidationError"],
    MutationSimulateTransactionResult: [
      "BaseError",
      "MutationSimulateTransactionSuccess",
      "ValidationError",
    ],
    MutationStartEmployeeApplicationResult: [
      "BaseError",
      "MutationStartEmployeeApplicationSuccess",
      "ValidationError",
    ],
    MutationStartPhoneNumberUpdateResult: [
      "BaseError",
      "MutationStartPhoneNumberUpdateSuccess",
      "ValidationError",
    ],
    MutationStartWaitlistUserApplicationResult: [
      "BaseError",
      "MutationStartWaitlistUserApplicationSuccess",
      "ValidationError",
    ],
    MutationSubmitEmployeeApplicationResult: [
      "BaseError",
      "MutationSubmitEmployeeApplicationSuccess",
      "ValidationError",
    ],
    MutationSubmitFeedbackResult: [
      "BaseError",
      "MutationSubmitFeedbackSuccess",
      "ValidationError",
    ],
    MutationSubmitWaitlistUserApplicationResult: [
      "BaseError",
      "MutationSubmitWaitlistUserApplicationSuccess",
      "ValidationError",
    ],
    MutationUpdateCardPinResult: [
      "BaseError",
      "MutationUpdateCardPinSuccess",
      "ValidationError",
    ],
    MutationUpdateFreezeStatusResult: [
      "BaseError",
      "MutationUpdateFreezeStatusSuccess",
      "ValidationError",
    ],
    MutationUpdateNotificationSettingsResult: [
      "BaseError",
      "MutationUpdateNotificationSettingsSuccess",
      "ValidationError",
    ],
    MutationUpdateUserAddressResult: [
      "BaseError",
      "MutationUpdateUserAddressSuccess",
      "ValidationError",
    ],
    MutationUpdateUserPreferencesResult: [
      "BaseError",
      "MutationUpdateUserPreferencesSuccess",
      "ValidationError",
    ],
    MutationUpsertAutoPaymentScheduleResult: [
      "BaseError",
      "MutationUpsertAutoPaymentScheduleSuccess",
      "ValidationError",
    ],
    MutationWithdrawDisputeResult: [
      "BaseError",
      "MutationWithdrawDisputeSuccess",
      "ValidationError",
    ],
    QueryActiveAutoPaymentResult: [
      "BaseError",
      "QueryActiveAutoPaymentSuccess",
      "ValidationError",
    ],
    QueryCardArtResult: ["BaseError", "QueryCardArtSuccess", "ValidationError"],
    QueryCardResult: ["BaseError", "QueryCardSuccess", "ValidationError"],
    QueryCardsResult: ["BaseError", "QueryCardsSuccess", "ValidationError"],
    QueryDetokenizedCardResult: [
      "BaseError",
      "QueryDetokenizedCardSuccess",
      "ValidationError",
    ],
    QueryDisputeResult: ["BaseError", "QueryDisputeSuccess", "ValidationError"],
    QueryExternalMerchantResult: [
      "BaseError",
      "QueryExternalMerchantSuccess",
      "ValidationError",
    ],
    QueryOffersResult: ["BaseError", "QueryOffersSuccess", "ValidationError"],
    QueryPaymentSchedulesResult: [
      "BaseError",
      "QueryPaymentSchedulesSuccess",
      "ValidationError",
    ],
    QueryPrimaryCardResult: ["BaseError", "QueryPrimaryCardSuccess", "ValidationError"],
    QueryStatementResult: ["BaseError", "QueryStatementSuccess", "ValidationError"],
    QueryStatementsResult: ["BaseError", "QueryStatementsSuccess", "ValidationError"],
    QueryTransactionResult: ["BaseError", "QueryTransactionSuccess", "ValidationError"],
    QueryTransactionsResult: ["BaseError", "QueryTransactionsSuccess", "ValidationError"],
  },
};
export default result;
