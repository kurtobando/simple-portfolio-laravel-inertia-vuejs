import { PageProps } from '@inertiajs/core';

export interface SharedProps extends PageProps {
    app: {
        name: string;
        description: string;
    };
    flash: {
        success: string;
        error: string;
    };
}
