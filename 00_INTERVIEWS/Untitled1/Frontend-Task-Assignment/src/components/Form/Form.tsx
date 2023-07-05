import React from 'react'
import './styles.css';


const Form = () => {
  return (
    <React.Fragment>
      <form id="msform">
        <fieldset>
          <h2>Create Post</h2>
          <h3>Fill the all mention detail to submit the form</h3>
          <input type="text" name="heading" value={''} placeholder="Heading" />
          <input type="text" name="pass" value={''} placeholder="Sub-Heading" />
          <textarea value={''} placeholder="Summary" />
          <input type="button" name="Submit" value="Submit" />
        </fieldset>
      </form>
    </React.Fragment>
  )
}

export default Form;