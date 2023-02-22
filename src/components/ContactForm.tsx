import * as React from "react";
import {
	Formik,
	Form,
	Field	
} from "formik";
import { Heading, Button } from "@chakra-ui/react";

interface MyFormValues {
	firstName: string;
	email: any;
}

export const ContactForm: React.FC<{}> = () => {
	const initialValues: MyFormValues = { firstName: "", email: "" };
	return (
		<div id="contact">
			<Heading
				as="h3"
				marginTop={5}
				marginLeft={{ base: "1rem", md: "5rem" }}
				marginBottom={5}
				size="xl"
				noOfLines={1}
			>
				Contact me
			</Heading>
			<Formik
				initialValues={initialValues}
				validate={(values) => {
					const errors: MyFormValues = { firstName: "", email: "" };
					if (!values.email) {
						errors.email = <div style={{color:'red'}}>Required</div>;
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(`${values.email}`)
					) {
						errors.email = <div style={{color:'red'}}>Invalid email address</div>;
					}
					return errors;
				}}
				onSubmit={(values, actions) => {
					console.log({ values, actions });
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					/* and other goodies */
				}) => (
					<Form className="contact__form" onSubmit={handleSubmit}>
							<>
								<Field
									id="firstName"
									name="firstName"
									placeholder="First Name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.firstName}
									className="contact__form-field"
								/>
								<br />
								<div style={{backgroundColor:"red"}}>{errors.firstName && touched.firstName && errors.firstName}</div>
								<br />
								<Field
									id="email"
									name="email"
									placeholder="johndoe@gmail.com"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									className="contact__form-field"
								/>
								<br />
								{errors.email && touched.email && errors.email}
								<br />
								<Field name="enquiries" as="select" className="contact__form-field">
									<option value="major">What is my major in college?</option>
									<option value="education">My education background</option>
									<option value="resume">My Resume</option>
									<option value="resume">References</option>
									<option value="other">Other</option>
								</Field>
								<br />
								<Field name="textarea" as="textarea" className="contact__form-field" rows="10"/>
								<Button variant="solid" colorScheme="blue" marginTop={5}>
									Submit
								</Button>
							</>
					</Form>
				)}
			</Formik>
		</div>
	);
};
