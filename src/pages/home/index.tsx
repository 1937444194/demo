import { useState, useRef } from 'react'
import { Input, Checkbox, Space } from 'antd'
import type { SelectProps } from 'antd'
import { HarmonyOSOutlined } from '@ant-design/icons'
import './styles.less'

interface IData {
  id: number
  title: string
}

const Home: React.FC = props => {
  const [data, setData] = useState<IData[]>([])
  const [value, setValue] = useState<number[]>([])
  const ref = useRef(0)

  const onPressEnter = evt => {
    const { keyCode } = evt
    if (keyCode !== 13) return false
    const { value } = evt.target
    data.push({
      id: ref.current++,
      title: value,
    })
    setData([...data])
  }

  const onChange = opt => {
    setValue(opt)
  }

  const onClear = () => {
    setData(data.filter(dt => !value.includes(dt.id)))
  }

  const onAll = () => {
    setValue(data.map(dt => dt.id))
  }

  return (
    <div styleName="box">
      <h1>回车添加数据</h1>
      <div styleName="todo">
        <Input
          style={{ width: 400 }}
          placeholder="create a new todo..."
          prefix={<HarmonyOSOutlined />}
          onPressEnter={onPressEnter}
        />
      </div>

      <div styleName="list-box">
        <div styleName="list-box-border">
          <ul styleName="list">
            {
              data.length ? <Checkbox.Group
                style={{ width: '100%' }}
                onChange={onChange}
                value={value}
              >
                {
                  data.map(dt => {
                    const { id, title } = dt

                    return (
                      <li key={id}>
                        <Checkbox value={id}>{title}</Checkbox>
                      </li>
                    )
                  })
                }
              </Checkbox.Group> : null
            } 
          </ul>

          <div styleName="button">
            <span>{data.length} items left</span>
            <span onClick={onAll}>All Active Completed</span>
            <span onClick={onClear}>Clear Completed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home