import { describe, expect, it, vi } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import TaskCard from "./TaskCard.vue"
import axios from "axios"

vi.mock("axios", () => {
  return {
    default: {
      get: vi.fn(),
    },
  };
});

const mockData = [
  {
    "completed": true,
    "name": "Task 1",
    "id": 1
  },
  {
    "completed": true,
    "name": "Task 2",
    "id": 2
  },
];

const mountTaskCard = (title) => mount(TaskCard, {
  propsData: {
    title: title || 'To-Do'
  }
})

describe('Task Card tests', () => {
  it('should mount component', () => {
    const wrapper = mountTaskCard()
    expect(wrapper).toBeTruthy()
  })

  it('should come with the correct title', () => {
    const wrapper = mountTaskCard()
    const title = wrapper.find('[data-test="card-title"]').text()
    expect(title).toEqual('To-Do')
  })

  it('should come with the correct title after change the title by props', () => {
    const wrapper = mountTaskCard('Daily Tasks')
    const title = wrapper.find('[data-test="card-title"]').text()
    expect(title).toEqual('Daily Tasks')
  })

  it('should call the correct endpoint', async () => {
    axios.get.mockReturnValue({
      data: mockData
    })
    mountTaskCard()
    await flushPromises()
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/tasks')
  })


  it('should come with two tasks', async () => {
    axios.get.mockReturnValue({
      data: mockData
    })
    const wrapper = mountTaskCard()
    await flushPromises()
    const tasks = wrapper.findAll('[data-test="card-task"]')
    expect(tasks).toHaveLength(2)
  })
})