import { IMeets, IUser, TypeUserForm } from '@/types/auth.types'

import { axiosWithAuth } from '@/api/interceptors'
import { IUserForm } from '@/types/form.types'

export interface IProfileResponse {
	meet: IMeets
	users: {
		email: string
        name: string
	}[]
}

class MeetsService {
	private BASE_URL = '/meets'

	async getMeet() {
		const response = await axiosWithAuth.get('/meets/partner')
		return response.data
	}

	async update(data: IMeets) {
		const response = await axiosWithAuth.put(this.BASE_URL, data)
		return response.data
	}	
	
	  async deleteUser(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response.data
	}
	
} 

export const MeetService = new MeetsService()
