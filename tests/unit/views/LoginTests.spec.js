import Vuex from 'vuex'
import { expect } from 'chai'
import sinon from 'sinon'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Login from '@/views/Login'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Login Tests', () => {
    let actions
    let store

    beforeEach(() => {
        actions = {
            login: sinon.stub(),
            actionInput: ()=>{}
          }
          store = new Vuex.Store({
            state: {},
            actions
          })
    })

    it('calls login with params when user clicks login', () => {
        const wrapper = shallowMount(Login, { store, localVue })

        wrapper.find('#email-input').setValue('test')
        wrapper.find('#login-button').trigger('click')
        console.log(actions.login.getCall(0).args)
        expect(actions.login.getCall(0).args[1]).to.deep.equal({ email: 'test', password: '' })
    })
})