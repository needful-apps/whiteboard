/* eslint-disable no-console */

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import StorageStrategy from './StorageStrategy.js'
import LRUCacheStrategy from './LRUCacheStrategy.js'
import RedisStrategy from './RedisStrategy.js'

export default class StorageManager {

	constructor(strategy) {
		this.setStrategy(strategy)
	}

	setStrategy(strategy) {
		if (strategy instanceof StorageStrategy) {
			this.strategy = strategy
		} else {
			throw new Error('Invalid strategy')
		}
	}

	async get(key) {
		return this.strategy.get(key)
	}

	async set(key, value) {
		await this.strategy.set(key, value)
	}

	async delete(key) {
		await this.strategy.delete(key)
	}

	async clear() {
		await this.strategy.clear()
	}

	getRooms() {
		return this.strategy.getRooms()
	}

	static create(strategyType, apiService) {

		let strategy

		switch (strategyType) {
		case 'lru':
			strategy = new LRUCacheStrategy(apiService)
			break
		case 'redis':
			strategy = new RedisStrategy(apiService)
			break
		default:
			throw new Error('Invalid storage strategy type')
		}

		return new StorageManager(strategy)
	}

}