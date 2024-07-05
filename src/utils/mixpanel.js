import mixpanel from 'mixpanel-browser';

mixpanel.init('19cb47a7aef947d8caa21c15d860fd90');

const Mixpanel = {
  track: (event, properties = {}) => {
    mixpanel.track(event, properties);
  },
  identify: (userId) => {
    mixpanel.identify(userId);
  },
  alias: (alias) => {
    mixpanel.alias(alias);
  },
  setPeopleProperties: (properties) => {
    mixpanel.people.set(properties);
  },
  setPeoplePropertyOnce: (property, value) => {
    mixpanel.people.set_once({ [property]: value });
  },
  trackPageView: (pageName) => {
    mixpanel.track('Page View', { page: pageName });
  },
  trackButtonClick: (buttonName) => {
    mixpanel.track('Button Click', { button: buttonName });
  },
  trackFormSubmission: (formName) => {
    mixpanel.track('Form Submission', { form: formName });
  },
  trackCustomEvent: (eventName, properties = {}) => {
    mixpanel.track(eventName, properties);
  }
};

export default Mixpanel;
