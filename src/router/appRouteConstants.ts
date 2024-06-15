/* eslint-disable prettier/prettier */
export const appRouteConstants = {
  INDEX: "/",
  AUTHENTICATION: {
    INDEX: "authentication"
  },
  BUILDER: {
    STATE: "/builder/:resumeState/:listingId",
    STATE_CREATE: "/builder/:resumeState",
  },
  LISTING: {
    INDEX: "/listings",
  },
  BOOKING: {
    INDEX: "/bookings",
    BOOKING_DETAIL: "/booking/:bookingId",
  },
  CHANNEL: {
    INDEX: "/channel-manager",
    DETAIL: "/channel-manager/:listingId",
  },
  CALENDAR: {
    INDEX: "/calendar",
    DETAIL: "/v2/:listingId/calendar",
  },
  INSIGHT: {
    OVERVIEW: "/insights/overview/:listingId",
    OPPORTUNITIES: "/insights/opportunities/:listingId",
    ANALYTICS: "/insights/demand/:listingId",
  },
  OWNER: {
    PREVIEW: "/property/:listingId",
  },
  SETTINGS: {
    DIRECT_BOOKING: "/direct-booking/:listingId",
  },
  IMPORT: {
    SELECT_CHANNEL: "/import/select-channel",
  },
  GUEST_REGISTRATION: {
    INDEX: "/guest-registration?tabName",
  },
  BOOKING_DETAIL: {
    INDEX: "/booking/:bookingId",
  },
  CONVERSATION: {
    INDEX: "/inbox/conversation/:conversationId",
  },
  GUEST_BOOKING_DETAILS: {
    INDEX: "/:language/:sc/ref/:bookingId/:token/:otherQuery",
  },
  VERIFICATION: {
    INDEX: "/verification",
  },
  CHANNEL_SETTING: {
    INDEX: "/channel-manager/:listingId",
    SPECIFIC_SETTINGS: {
      INDEX: "/channel-manager/:listingId/specific-settings/:saleChannelId",
      POLICES: {
        INDEX: "/channel-manager/:listingId/specific-settings/:saleChannelId#POLICY",
        FEES_AND_CHARGES:
          "/v2/channel-manager/:listingId/specific-settings/:saleChannelId/POLICY/FEES_AND_CHARGES",
        CHILDREN_POLICIES_OCCUPANCY:
          "/v2/channel-manager/:listingId/specific-settings/:saleChannelId/POLICY/CHILDREN_POLICIES_OCCUPANCY",
      },
    },
  },
  WEBSITE_BUILDER: {
    INDEX: "/website-builder",
    SITE_SETTING: "/website-builder/sites/:siteId",
    LANGUAGE_TRANSLATION: "/website-builder/sites/:siteId/languages/:languageId",
  },
};
