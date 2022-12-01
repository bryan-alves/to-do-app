import { afterEach, describe, expect, it, vi, vitest } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import TaskCard from "./TaskCard.vue"
import axios from "axios"

vi.mock("axios");

const mockData = [
  {
    "completed": true,
    "name": "Task 1",
    "id": 1
  },
  {
    "completed": false,
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

  afterEach(() => {
    vitest.clearAllMocks()
  })

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

  it('should create new task', async () => {
    const wrapper = mountTaskCard()
    wrapper.find('[data-test="new-task"]').setValue('Task 3')
    await wrapper.find('form').trigger('submit')
    await flushPromises()

    const tasks = wrapper.findAll('[data-test="card-task"]')

    expect(axios.post).toHaveBeenCalled(1)
    expect(tasks.length).toBe(3)
  })

  it('should delete task and remove from the list', async () => {
    const wrapper = mountTaskCard()
    await flushPromises()
    const buttonToDelete = wrapper.find('#delete-task-2')

    await buttonToDelete.trigger('click')
    await flushPromises()
    const tasks = wrapper.findAll('[data-test="card-task"]')

    expect(tasks.length).toBe(2)
  })

  it('should add class after concluded task', async () => {
    const wrapper = mountTaskCard()
    await flushPromises()

    const concludedButton = wrapper.find('#complete-task-2')
    await concludedButton.trigger('click')

    const task = wrapper.find('#task-2').html()
    console.log(task)

    expect(task).toContain('task-card__item--concluded')
  })
})