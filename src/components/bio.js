/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { Avatar } from 'theme-ui'

const Bio = ({ author }) => {
    const avatarUrl = author?.avatar?.url

    return (
        <Flex
            className='bio'
            sx={{
                flexDirection: ['row', 'row', 'column'],
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            {avatarUrl && (
                <div sx={{ flex: [1, 1, null] }}>
                    <Avatar
                        alt={author?.firstName || ``}
                        className='bio-avatar'
                        src={avatarUrl}
                        width={96}
                        height={96}
                    />
                </div>
            )}
            {author?.firstName && (
                <div sx={{ flex: [3, 3, null] }}>
                    <p>
                        Written by{' '}
                        <strong>
                            {author.firstName} {author.lastName}
                        </strong>
                    </p>
                    <p>
                        <span sx={{ color: 'muted', fontSize: 0 }}>{author?.description || null}</span>
                    </p>
                </div>
            )}
        </Flex>
    )
}

export default Bio
