let eventHandler = (data, that) => {
  switch (data.intentName) {
    case "CoursesVisualization":
      that.props.history.push('/app/courses/entitiesIds');
      break;
    case "CommandsPresentation":
      that.props.history.push('/app/mentorpresentation');
      break;
    case "LoginVisualization":
      that.props.history.push('/access/login');
      break;
    case "ProfileVisualization":
      that.props.history.push('/app/profile/me');
      break;
    case "RegisterVisualization":
      that.props.history.push('/access/register');
      break;
    case "RecoverVisualization":
      that.props.history.push('/access/recover');
      break;
    case "ViewLanding":
      that.props.history.push('/landing');
      break;
    default:
      break;
  }
}

export default eventHandler;
