<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Whiteboard\Consts;

final class JWTConsts {
	public const JWT_ALGORITHM = 'HS256';
	// on year exp time 
	public const EXPIRATION_TIME = 31536000;
}
