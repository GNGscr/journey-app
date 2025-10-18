import JourneyApp from "./layouts/JourneyApp";
import ErrorBoundary from "./ErrorBoundary";

export default function Home() {
  return (
  <ErrorBoundary>
    <JourneyApp />
  </ErrorBoundary>);
}
