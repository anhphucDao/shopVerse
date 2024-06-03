// import {NavigationState} from '../../types/props';

// Helper function to find the active route
// @ts-ignore
export default function getActiveRouteName(state) {
  const route = state.routes[state.index];

  if (route.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state);
  }

  return route.name;
}
