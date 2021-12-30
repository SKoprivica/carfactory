import {
    Typography,
    Form,
    Select

} from "antd";
import { getPropsForCategory, getTypeFieldsArrayForCategory, getPropsForType } from "./constantsFunctions";
const { Text, Title } = Typography;
const { Option } = Select;

export const CategoryForm = ({ category }) => {
    console.log(category)
    const props = getPropsForCategory(category)
    console.log(props)
    if (props) {
        return <Fragment {...props} />
    }
    return <></>
}

export const TypeField = ({ category }) => {
    return (
        <Form.Item
            name={["type"]}
            label="Type"
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Select placeholder="select type">
                {getTypeFieldsArrayForCategory(category).map(p => getTypeOption(p))}
            </Select>
        </Form.Item>
    )
}

const getTypeOption = ({ fieldName }) => {
    return (
        <Option key={fieldName} value={fieldName}>
            {fieldName}
        </Option>
    );
}


export const Fragment = ({ title, fields }) => {
    return (
        <>
            <Title level={3}>{title}</Title>
            {fields.map((p) => <Field key={p.fieldName} {...p} />)}
        </>
    );
}

export const Field = ({ fieldName, label, component }) => {
    return (
        <Form.Item
            key={fieldName}
            name={fieldName}
            label={label}
            valuePropName="checked"
        >
            {component}
        </Form.Item>
    );
}

export const TypeForm = ({ type }) => {
    const props = getPropsForType(type)
    if (props) {
        return <Fragment {...props} />
    }
    return <></>
}