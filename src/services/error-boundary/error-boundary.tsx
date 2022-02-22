import * as React from "react";
import Toast from "../Toast/Toast";
interface ErrorState {
  error?: any;
  errorInfo?: any;
  hasError: boolean;
}
export default class ErrorBoundary extends React.Component<{}, ErrorState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError = (error: any): any => {
    return { hasError: true };
  };

  public componentDidCatch(error: any, errorInfo: any): void {
    this.setState({
      error,
      errorInfo,
    });
  }

  render(): any {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return Toast.error("Oops ! Something went wrong.", "en");
    }
    return this.props.children;
  }
}
